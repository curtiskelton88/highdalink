import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface ChartProps {
  title: string;
  data: DataPoint[];
  type: 'bar' | 'line' | 'pie';
  height?: number;
  showTrend?: boolean;
}

function AdvancedChart({ title, data, type, height = 300, showTrend = false }: ChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-purple-500', 
    'bg-red-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-pink-500'
  ];

  const getBarHeight = (value: number) => {
    return (value / maxValue) * (height - 60);
  };

  const getLinePoints = () => {
    const width = 100;
    const stepX = width / (data.length - 1);
    
    return data.map((point, index) => {
      const x = index * stepX;
      const y = height - 60 - (point.value / maxValue) * (height - 80);
      return `${x},${y}`;
    }).join(' ');
  };

  const getTrend = () => {
    if (data.length < 2) return null;
    const firstValue = data[0].value;
    const lastValue = data[data.length - 1].value;
    const change = ((lastValue - firstValue) / firstValue) * 100;
    return {
      isPositive: change > 0,
      percentage: Math.abs(change).toFixed(1)
    };
  };

  const trend = showTrend ? getTrend() : null;

  if (type === 'bar') {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {trend && (
            <div className={`flex items-center text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              {trend.percentage}%
            </div>
          )}
        </div>
        
        <div className="flex items-end justify-between space-x-2" style={{ height: `${height}px` }}>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex justify-center mb-2">
                <div
                  className={`${item.color || colors[index % colors.length]} rounded-t-lg transition-all duration-500 hover:opacity-80 w-full max-w-16`}
                  style={{ height: `${getBarHeight(item.value)}px` }}
                  title={`${item.label}: ${item.value}`}
                ></div>
              </div>
              <div className="text-xs text-gray-600 text-center truncate w-full">{item.label}</div>
              <div className="text-sm font-medium text-gray-900">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'line') {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {trend && (
            <div className={`flex items-center text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              {trend.percentage}%
            </div>
          )}
        </div>
        
        <div className="relative" style={{ height: `${height}px` }}>
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((percentage) => (
              <line
                key={percentage}
                x1="0"
                y1={`${percentage}%`}
                x2="100%"
                y2={`${percentage}%`}
                stroke="#e5e7eb"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
            
            {/* Line */}
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              points={getLinePoints()}
              className="drop-shadow-sm"
            />
            
            {/* Points */}
            {data.map((point, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = height - 60 - (point.value / maxValue) * (height - 80);
              return (
                <circle
                  key={index}
                  cx={`${x}%`}
                  cy={y}
                  r="4"
                  fill="#3b82f6"
                  className="hover:r-6 transition-all cursor-pointer"
                  title={`${point.label}: ${point.value}`}
                />
              );
            })}
          </svg>
          
          {/* Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600">
            {data.map((point, index) => (
              <span key={index} className="text-center">{point.label}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'pie') {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    const radius = 80;
    const centerX = 100;
    const centerY = 100;

    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
        
        <div className="flex items-center justify-center">
          <div className="relative">
            <svg width="200" height="200" viewBox="0 0 200 200">
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const angle = (item.value / total) * 360;
                const startAngle = currentAngle;
                const endAngle = currentAngle + angle;
                
                const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
                const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
                const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
                const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
                
                const largeArcFlag = angle > 180 ? 1 : 0;
                
                const pathData = [
                  `M ${centerX} ${centerY}`,
                  `L ${x1} ${y1}`,
                  `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                  'Z'
                ].join(' ');
                
                currentAngle += angle;
                
                return (
                  <path
                    key={index}
                    d={pathData}
                    fill={`var(--color-${index})`}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ '--color-0': '#3b82f6', '--color-1': '#10b981', '--color-2': '#f59e0b', '--color-3': '#8b5cf6' } as any}
                    title={`${item.label}: ${percentage.toFixed(1)}%`}
                  />
                );
              })}
            </svg>
          </div>
          
          <div className="ml-6 space-y-2">
            {data.map((item, index) => {
              const percentage = ((item.value / total) * 100).toFixed(1);
              return (
                <div key={index} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]}`}></div>
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <span className="text-sm font-medium text-gray-900">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default AdvancedChart;
import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Calculator, BarChart3, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

function ROICalculator() {
  const [inputs, setInputs] = useState({
    currentTraffic: 10000,
    conversionRate: 2.5,
    averageOrderValue: 150,
    currentRankingPosition: 15,
    targetKeywords: 5,
    domainAuthority: 45
  });

  const [results, setResults] = useState({
    trafficIncrease: 0,
    newTraffic: 0,
    additionalRevenue: 0,
    monthlyROI: 0,
    annualROI: 0,
    rankingImprovement: 0
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const { currentTraffic, conversionRate, averageOrderValue, currentRankingPosition, targetKeywords, domainAuthority } = inputs;
    
    // Calculate expected ranking improvement based on DA increase
    const daImprovement = Math.min(20, (90 - domainAuthority) * 0.3);
    const expectedNewPosition = Math.max(1, currentRankingPosition - Math.floor(daImprovement * 0.5));
    const rankingImprovement = currentRankingPosition - expectedNewPosition;
    
    // Calculate traffic increase based on ranking improvement
    let trafficMultiplier = 1;
    if (expectedNewPosition <= 3) trafficMultiplier = 3.5;
    else if (expectedNewPosition <= 5) trafficMultiplier = 2.8;
    else if (expectedNewPosition <= 10) trafficMultiplier = 2.2;
    else trafficMultiplier = 1.5;
    
    const trafficIncrease = Math.round((currentTraffic * (trafficMultiplier - 1)) * (targetKeywords / 10));
    const newTraffic = currentTraffic + trafficIncrease;
    
    // Calculate revenue impact
    const additionalConversions = (trafficIncrease * conversionRate) / 100;
    const additionalRevenue = Math.round(additionalConversions * averageOrderValue);
    
    // Calculate ROI (assuming $1,100 investment for Authority Pro package)
    const investment = 1100;
    const monthlyROI = Math.round(((additionalRevenue - investment) / investment) * 100);
    const annualROI = Math.round((((additionalRevenue * 12) - investment) / investment) * 100);
    
    setResults({
      trafficIncrease,
      newTraffic,
      additionalRevenue,
      monthlyROI,
      annualROI,
      rankingImprovement
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/10 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Calculator className="h-4 w-4 mr-2" />
            ROI Calculator
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your <span className="text-blue-600">Link Building ROI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the potential impact of DR90+ editorial backlinks on your traffic, rankings, and revenue
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
              Your Current Metrics
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Organic Traffic
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={inputs.currentTraffic}
                  onChange={(e) => handleInputChange('currentTraffic', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1K</span>
                  <span className="font-medium text-blue-600">{inputs.currentTraffic.toLocaleString()}</span>
                  <span>100K</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conversion Rate (%)
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.1"
                  value={inputs.conversionRate}
                  onChange={(e) => handleInputChange('conversionRate', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0.5%</span>
                  <span className="font-medium text-blue-600">{inputs.conversionRate}%</span>
                  <span>10%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Order Value ($)
                </label>
                <input
                  type="range"
                  min="25"
                  max="1000"
                  step="25"
                  value={inputs.averageOrderValue}
                  onChange={(e) => handleInputChange('averageOrderValue', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$25</span>
                  <span className="font-medium text-blue-600">${inputs.averageOrderValue}</span>
                  <span>$1,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Average Ranking Position
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={inputs.currentRankingPosition}
                  onChange={(e) => handleInputChange('currentRankingPosition', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1st</span>
                  <span className="font-medium text-blue-600">#{inputs.currentRankingPosition}</span>
                  <span>50th</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Keywords Count
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={inputs.targetKeywords}
                  onChange={(e) => handleInputChange('targetKeywords', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span className="font-medium text-blue-600">{inputs.targetKeywords}</span>
                  <span>20</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Domain Authority
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  step="5"
                  value={inputs.domainAuthority}
                  onChange={(e) => handleInputChange('domainAuthority', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>DA10</span>
                  <span className="font-medium text-blue-600">DA{inputs.domainAuthority}</span>
                  <span>DA90</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Projected Results */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3" />
                Projected Results
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm text-blue-100">Traffic Increase</div>
                  <div className="text-2xl font-bold">+{results.trafficIncrease.toLocaleString()}</div>
                  <div className="text-xs text-blue-200">visitors/month</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm text-blue-100">Ranking Boost</div>
                  <div className="text-2xl font-bold">+{results.rankingImprovement}</div>
                  <div className="text-xs text-blue-200">positions average</div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-center">
                  <div className="text-sm text-blue-100 mb-2">Additional Monthly Revenue</div>
                  <div className="text-4xl font-bold text-white">${results.additionalRevenue.toLocaleString()}</div>
                  <div className="text-blue-100 text-sm mt-2">Based on your conversion metrics</div>
                </div>
              </div>
            </div>

            {/* ROI Breakdown */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                ROI Analysis
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Investment (Authority Pro)</span>
                  <span className="font-semibold text-gray-900">$1,100</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="text-gray-700">Monthly Revenue Increase</span>
                  <span className="font-semibold text-green-600">+${results.additionalRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="text-gray-700">First Month ROI</span>
                  <span className="font-semibold text-blue-600">
                    {results.monthlyROI > 0 ? '+' : ''}{results.monthlyROI}%
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="text-gray-700">12-Month ROI</span>
                  <span className="font-semibold text-purple-600">
                    +{results.annualROI.toLocaleString()}%
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <div className="flex items-center mb-2">
                  <Zap className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="font-semibold text-orange-800">Compound Growth</span>
                </div>
                <p className="text-sm text-orange-700">
                  These results compound over time as your domain authority continues to grow, leading to even higher rankings and traffic.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Achieve These Results?</h3>
              <p className="text-green-100 mb-6">Start building authority with DR90+ editorial backlinks today</p>
              <Link 
                to="/get-started"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold inline-flex items-center"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 bg-white rounded-2xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Important Notes:</h4>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• Results are projections based on industry averages and typical improvements from high-authority backlinks</p>
            <p>• Actual results may vary based on competition, content quality, technical SEO, and other ranking factors</p>
            <p>• Rankings and traffic improvements typically occur over 3-6 months as Google processes new authority signals</p>
            <p>• This calculator assumes continued SEO best practices and quality content creation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ROICalculator;
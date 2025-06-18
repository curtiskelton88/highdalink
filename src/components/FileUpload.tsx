import React, { useState, useRef } from 'react';
import { Upload, File, X, Download, Eye } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadDate: string;
  url?: string;
}

interface FileUploadProps {
  projectId?: string;
  messageId?: string;
  onFileUpload?: (files: UploadedFile[]) => void;
  existingFiles?: UploadedFile[];
  allowedTypes?: string[];
  maxFileSize?: number; // in MB
  maxFiles?: number;
}

function FileUpload({ 
  projectId, 
  messageId, 
  onFileUpload, 
  existingFiles = [], 
  allowedTypes = ['pdf', 'doc', 'docx', 'txt', 'png', 'jpg', 'jpeg'],
  maxFileSize = 10,
  maxFiles = 5 
}: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>(existingFiles);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.includes('image')) return '🖼️';
    if (type.includes('pdf')) return '📄';
    if (type.includes('word') || type.includes('doc')) return '📝';
    if (type.includes('text')) return '📋';
    return '📁';
  };

  const isValidFileType = (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    return extension ? allowedTypes.includes(extension) : false;
  };

  const isValidFileSize = (file: File) => {
    return file.size <= maxFileSize * 1024 * 1024;
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: UploadedFile[] = [];
    const filesToProcess = Array.from(selectedFiles).slice(0, maxFiles - files.length);

    filesToProcess.forEach(file => {
      if (!isValidFileType(file)) {
        alert(`File type not allowed: ${file.name}`);
        return;
      }

      if (!isValidFileSize(file)) {
        alert(`File too large: ${file.name}. Max size is ${maxFileSize}MB`);
        return;
      }

      const uploadedFile: UploadedFile = {
        id: Date.now().toString() + Math.random().toString(36),
        name: file.name,
        size: file.size,
        type: file.type,
        uploadDate: new Date().toISOString(),
        url: URL.createObjectURL(file)
      };

      newFiles.push(uploadedFile);

      // Simulate upload progress
      const fileId = uploadedFile.id;
      setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
      
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const progress = prev[fileId] + 10;
          if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setUploadProgress(prev => {
                const newProgress = { ...prev };
                delete newProgress[fileId];
                return newProgress;
              });
            }, 500);
          }
          return { ...prev, [fileId]: Math.min(progress, 100) };
        });
      }, 100);
    });

    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onFileUpload?.(updatedFiles);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeFile = (fileId: string) => {
    const updatedFiles = files.filter(f => f.id !== fileId);
    setFiles(updatedFiles);
    onFileUpload?.(updatedFiles);
  };

  const downloadFile = (file: UploadedFile) => {
    if (file.url) {
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.name;
      link.click();
    }
  };

  const previewFile = (file: UploadedFile) => {
    if (file.url && file.type.includes('image')) {
      window.open(file.url, '_blank');
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
          isDragging 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className={`h-12 w-12 mx-auto mb-4 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Files</h3>
        <p className="text-gray-600 mb-4">
          Drag and drop files here, or click to browse
        </p>
        <div className="text-sm text-gray-500">
          <p>Supported formats: {allowedTypes.join(', ').toUpperCase()}</p>
          <p>Max file size: {maxFileSize}MB • Max files: {maxFiles}</p>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          accept={allowedTypes.map(type => `.${type}`).join(',')}
          onChange={(e) => handleFileSelect(e.target.files)}
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Uploaded Files ({files.length})</h4>
          {files.map((file) => (
            <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <span className="text-2xl">{getFileIcon(file.type)}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{formatFileSize(file.size)}</span>
                    <span>{new Date(file.uploadDate).toLocaleDateString()}</span>
                  </div>
                  
                  {/* Upload Progress */}
                  {uploadProgress[file.id] !== undefined && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div 
                          className="bg-blue-500 h-1 rounded-full transition-all duration-200"
                          style={{ width: `${uploadProgress[file.id]}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-blue-600">{uploadProgress[file.id]}%</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                {file.type.includes('image') && (
                  <button
                    onClick={() => previewFile(file)}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Preview"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => downloadFile(file)}
                  className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                  title="Download"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button
                  onClick={() => removeFile(file.id)}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                  title="Remove"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
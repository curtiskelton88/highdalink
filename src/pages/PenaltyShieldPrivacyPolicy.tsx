import React from 'react';
import SEOHead from '../components/SEOHead';

function PenaltyShieldPrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Penalty Shield Privacy Policy - HighDALink"
        description="Privacy policy for Penalty Shield extension - Google Penalty Detector & SEO Guardian. Learn how we protect your data and privacy."
        keywords="penalty shield privacy policy, SEO extension privacy, Google penalty detector privacy, data protection"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div 
              dangerouslySetInnerHTML={{
                __html: `
                  <style>
                    .privacy-content {
                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                      line-height: 1.6;
                      color: #333;
                    }
                    .privacy-content h1 { 
                      color: #4299e1; 
                      border-bottom: 2px solid #4299e1; 
                      padding-bottom: 10px; 
                      margin-bottom: 20px;
                    }
                    .privacy-content h2 { 
                      color: #2d3748; 
                      margin-top: 30px; 
                      margin-bottom: 15px;
                    }
                    .privacy-content h3 { 
                      color: #4a5568; 
                      margin-bottom: 10px;
                    }
                    .privacy-content .header-info { 
                      background: #f7fafc; 
                      padding: 15px; 
                      border-radius: 8px; 
                      margin: 20px 0; 
                    }
                    .privacy-content .highlight { 
                      background: #e6fffa; 
                      padding: 10px; 
                      border-left: 4px solid #48bb78; 
                      margin: 15px 0; 
                    }
                    .privacy-content ul, .privacy-content ol { 
                      padding-left: 25px; 
                    }
                    .privacy-content li { 
                      margin: 8px 0; 
                    }
                    .privacy-content .contact-info { 
                      background: #4299e1; 
                      color: white; 
                      padding: 15px; 
                      border-radius: 8px; 
                      margin-top: 30px; 
                    }
                    .privacy-content .contact-info a { 
                      color: #bee3f8; 
                    }
                  </style>
                  <div class="privacy-content">
                    <h1>Privacy Policy for Penalty Shield Extension</h1>

                    <div class="header-info">
                        <p><strong>Last Updated:</strong> <span id="lastUpdated"></span></p>
                        <p><strong>Extension:</strong> Penalty Shield - Google Penalty Detector & SEO Guardian</p>
                        <p><strong>Developer:</strong> HighDALink</p>
                    </div>

                    <h2>Information We Collect</h2>

                    <h3>Data Collection</h3>
                    <p>Penalty Shield collects minimal data necessary for functionality:</p>
                    <ul>
                        <li><strong>Website URLs:</strong> Only URLs you explicitly choose to monitor</li>
                        <li><strong>Extension Settings:</strong> Your preferences and subscription status</li>
                        <li><strong>Usage Statistics:</strong> Anonymous analytics to improve functionality (optional)</li>
                        <li><strong>Risk Analysis Results:</strong> SEO health scores and penalty assessments</li>
                    </ul>

                    <div class="highlight">
                        <h3>Data We DO NOT Collect</h3>
                        <ul>
                            <li>Personal browsing history</li>
                            <li>Personal identification information</li>
                            <li>Login credentials or passwords</li>
                            <li>Credit card information (handled securely by PayPal)</li>
                            <li>Content of web pages beyond SEO analysis</li>
                        </ul>
                    </div>

                    <h2>How We Use Information</h2>

                    <h3>Primary Uses</h3>
                    <ul>
                        <li><strong>SEO Analysis:</strong> Assess penalty risks for monitored websites</li>
                        <li><strong>Service Provision:</strong> Deliver penalty alerts and monitoring services</li>
                        <li><strong>Subscription Management:</strong> Process payments via PayPal</li>
                        <li><strong>Feature Improvement:</strong> Enhance extension functionality</li>
                    </ul>

                    <h3>Data Storage</h3>
                    <ul>
                        <li><strong>Local Storage:</strong> Settings and preferences stored locally in your browser</li>
                        <li><strong>No Cloud Storage:</strong> We do not store your personal data on external servers</li>
                        <li><strong>Chrome Sync:</strong> Uses Chrome's built-in sync for settings (optional)</li>
                    </ul>

                    <h2>Information Sharing</h2>

                    <h3>Third-Party Sharing</h3>
                    <ul>
                        <li><strong>PayPal:</strong> Payment processing only (subscription management)</li>
                        <li><strong>No Data Sales:</strong> We never sell personal information to third parties</li>
                        <li><strong>No Marketing Lists:</strong> Your data is not shared for marketing purposes</li>
                    </ul>

                    <h3>Legal Compliance</h3>
                    <p>We may disclose information when required by law or to protect our rights.</p>

                    <h2>Data Security</h2>

                    <h3>Protection Measures</h3>
                    <ul>
                        <li><strong>Local Processing:</strong> Analysis performed locally in your browser</li>
                        <li><strong>Encrypted Storage:</strong> Sensitive data encrypted using browser security</li>
                        <li><strong>Secure Connections:</strong> All external communications use HTTPS</li>
                        <li><strong>Limited Permissions:</strong> Extension requests minimal browser permissions</li>
                    </ul>

                    <h2>Your Privacy Rights</h2>

                    <h3>Control Options</h3>
                    <ul>
                        <li><strong>Opt-Out:</strong> Disable analytics in extension settings</li>
                        <li><strong>Data Deletion:</strong> Uninstall extension to remove all local data</li>
                        <li><strong>Settings Control:</strong> Modify privacy preferences anytime</li>
                        <li><strong>Subscription Cancellation:</strong> Cancel through PayPal without penalty</li>
                    </ul>

                    <h3>Data Retention</h3>
                    <ul>
                        <li><strong>Settings Data:</strong> Retained until extension removal</li>
                        <li><strong>Analysis Results:</strong> Stored locally based on your retention settings</li>
                        <li><strong>Usage Analytics:</strong> Anonymous data retained for service improvement</li>
                    </ul>

                    <h2>Permissions Explained</h2>

                    <h3>Required Permissions</h3>
                    <ul>
                        <li><strong>activeTab:</strong> Analyze current webpage for SEO health (only when requested)</li>
                        <li><strong>storage:</strong> Save your settings and preferences locally</li>
                        <li><strong>alarms:</strong> Schedule periodic monitoring checks</li>
                        <li><strong>notifications:</strong> Show penalty alerts and updates</li>
                    </ul>

                    <h3>Why These Permissions</h3>
                    <p>Each permission serves a specific function essential for penalty detection and monitoring services.</p>

                    <h2>Children's Privacy</h2>
                    <p>This extension is not intended for children under 13. We do not knowingly collect information from children.</p>

                    <h2>International Users</h2>
                    <p>This privacy policy applies to all users regardless of location. Data processing complies with applicable privacy laws including GDPR and CCPA.</p>

                    <h2>Changes to Privacy Policy</h2>
                    <p>We may update this policy periodically. Continued use of the extension constitutes acceptance of any changes.</p>

                    <div class="contact-info">
                        <h3 style="color: white; margin-top: 0;">Contact Information</h3>
                        <p><strong>Privacy Questions:</strong></p>
                        <ul style="margin-bottom: 15px;">
                            <li><strong>Email:</strong> <a href="mailto:info@highdalink.com">info@highdalink.com</a></li>
                            <li><strong>Website:</strong> <a href="https://highdalink.com" target="_blank">https://highdalink.com</a></li>
                            <li><strong>Response Time:</strong> 48-72 hours for privacy inquiries</li>
                        </ul>
                        <p><strong>Data Requests:</strong> Contact us for data access, correction, or deletion requests.</p>
                    </div>

                    <div class="highlight" style="margin-top: 30px;">
                        <p><strong>Summary:</strong> Penalty Shield prioritizes your privacy by processing data locally, requesting minimal permissions, and never selling personal information. Your SEO monitoring data stays private and secure.</p>
                    </div>
                  </div>
                  
                  <script>
                    // Auto-update the date
                    document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                  </script>
                `
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PenaltyShieldPrivacyPolicy;
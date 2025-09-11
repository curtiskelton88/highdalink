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
                      font-size: 2.5rem;
                      font-weight: bold;
                    }
                    .privacy-content h2 { 
                      color: #2d3748; 
                      margin-top: 30px; 
                      margin-bottom: 15px;
                      font-size: 1.5rem;
                      font-weight: 600;
                    }
                    .privacy-content h3 { 
                      color: #4a5568; 
                      margin-bottom: 10px;
                      font-size: 1.25rem;
                      font-weight: 600;
                    }
                    .privacy-content .header-info { 
                      background: #f7fafc; 
                      padding: 15px; 
                      border-radius: 8px; 
                      margin: 20px 0; 
                      border: 1px solid #e2e8f0;
                    }
                    .privacy-content .highlight { 
                      background: #e6fffa; 
                      padding: 15px; 
                      border-left: 4px solid #48bb78; 
                      margin: 15px 0; 
                      border-radius: 0 8px 8px 0;
                    }
                    .privacy-content ul, .privacy-content ol { 
                      padding-left: 25px; 
                      margin-bottom: 15px;
                    }
                    .privacy-content li { 
                      margin: 8px 0; 
                    }
                    .privacy-content .contact-info { 
                      background: linear-gradient(135deg, #4299e1, #3182ce); 
                      color: white; 
                      padding: 20px; 
                      border-radius: 12px; 
                      margin-top: 30px; 
                      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    .privacy-content .contact-info a { 
                      color: #bee3f8; 
                      text-decoration: underline;
                    }
                    .privacy-content .contact-info a:hover { 
                      color: #ffffff; 
                    }
                    .privacy-content p {
                      margin-bottom: 15px;
                      line-height: 1.7;
                    }
                    .privacy-content strong {
                      font-weight: 600;
                      color: #2d3748;
                    }
                  </style>
                  <div class="privacy-content">
                    <h1>Privacy Policy for Penalty Shield Extension</h1>

                    <div class="header-info">
                        <p><strong>Last Updated:</strong> <span id="lastUpdated"></span></p>
                        <p><strong>Extension:</strong> Penalty Shield - Google Penalty Detector & SEO Guardian</p>
                        <p><strong>Developer:</strong> HighDALink</p>
                        <p><strong>Version:</strong> 2.1.0</p>
                    </div>

                    <h2>1. Information We Collect</h2>

                    <h3>Personal Information</h3>
                    <p>We collect minimal personal information necessary for service functionality:</p>
                    <ul>
                        <li><strong>Email Address:</strong> For subscription management and support communications</li>
                        <li><strong>Payment Information:</strong> Processed securely through PayPal (we do not store payment details)</li>
                        <li><strong>Account Preferences:</strong> Settings and configuration choices you make</li>
                    </ul>

                    <h3>Website and SEO Data</h3>
                    <p>Penalty Shield analyzes the following data to provide SEO insights:</p>
                    <ul>
                        <li><strong>Website URLs:</strong> Only URLs you explicitly choose to monitor</li>
                        <li><strong>SEO Metrics:</strong> Domain authority, page authority, backlink profiles</li>
                        <li><strong>Content Analysis:</strong> Page titles, meta descriptions, header structure</li>
                        <li><strong>Technical SEO Data:</strong> Page load times, mobile-friendliness, schema markup</li>
                        <li><strong>Risk Assessment Results:</strong> Penalty risk scores and recommendations</li>
                    </ul>

                    <h3>Automatically Collected Information</h3>
                    <ul>
                        <li><strong>Usage Statistics:</strong> Feature usage patterns (anonymized)</li>
                        <li><strong>Error Logs:</strong> Technical issues for debugging purposes</li>
                        <li><strong>Browser Information:</strong> Browser type and version for compatibility</li>
                    </ul>

                    <div class="highlight">
                        <h3>Data We DO NOT Collect</h3>
                        <ul>
                            <li>Complete browsing history or personal web activity</li>
                            <li>Personal identification information beyond email</li>
                            <li>Login credentials or passwords for other services</li>
                            <li>Credit card information (handled exclusively by PayPal)</li>
                            <li>Content of web pages beyond SEO-relevant elements</li>
                            <li>Personal communications or private documents</li>
                        </ul>
                    </div>

                    <h2>2. How We Use Your Information</h2>

                    <h3>Primary Uses</h3>
                    <ul>
                        <li><strong>SEO Analysis:</strong> Assess penalty risks and provide SEO recommendations</li>
                        <li><strong>Service Provision:</strong> Deliver penalty alerts and monitoring services</li>
                        <li><strong>Subscription Management:</strong> Process payments and manage account status</li>
                        <li><strong>Customer Support:</strong> Respond to inquiries and provide technical assistance</li>
                        <li><strong>Feature Improvement:</strong> Enhance extension functionality based on usage patterns</li>
                        <li><strong>Security:</strong> Detect and prevent fraudulent activity</li>
                    </ul>

                    <h3>Data Processing and Storage</h3>
                    <ul>
                        <li><strong>Local Processing:</strong> Most analysis performed locally in your browser</li>
                        <li><strong>Minimal Cloud Storage:</strong> Only essential data stored on secure servers</li>
                        <li><strong>Chrome Sync:</strong> Uses Chrome's built-in sync for settings (optional)</li>
                        <li><strong>Data Encryption:</strong> All data encrypted in transit and at rest</li>
                    </ul>

                    <h2>3. Information Sharing and Disclosure</h2>

                    <h3>Third-Party Services</h3>
                    <ul>
                        <li><strong>PayPal:</strong> Payment processing and subscription management only</li>
                        <li><strong>SEO APIs:</strong> Anonymous queries to check domain metrics (no personal data)</li>
                        <li><strong>Analytics:</strong> Anonymized usage statistics for service improvement</li>
                    </ul>

                    <h3>We Do Not Share</h3>
                    <ul>
                        <li>Personal information with advertisers or marketers</li>
                        <li>Your website data with competitors or third parties</li>
                        <li>Individual usage patterns or SEO data</li>
                        <li>Email addresses for marketing purposes</li>
                    </ul>

                    <h3>Legal Compliance</h3>
                    <p>We may disclose information when required by law, to protect our rights, or to ensure user safety. We will notify users of such disclosures when legally permitted.</p>

                    <h2>4. Data Security</h2>

                    <h3>Protection Measures</h3>
                    <ul>
                        <li><strong>Encryption:</strong> AES-256 encryption for data at rest, TLS 1.3 for data in transit</li>
                        <li><strong>Access Controls:</strong> Strict access controls and authentication requirements</li>
                        <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                        <li><strong>Secure Infrastructure:</strong> Industry-standard cloud security practices</li>
                        <li><strong>Data Minimization:</strong> Collect and retain only necessary information</li>
                    </ul>

                    <h3>Incident Response</h3>
                    <p>In the unlikely event of a data breach, we will notify affected users within 72 hours and take immediate steps to secure the data and prevent further unauthorized access.</p>

                    <h2>5. Data Retention</h2>

                    <h3>Retention Periods</h3>
                    <ul>
                        <li><strong>Account Data:</strong> Retained while subscription is active plus 30 days</li>
                        <li><strong>SEO Analysis Results:</strong> Stored locally based on your settings (default: 90 days)</li>
                        <li><strong>Usage Analytics:</strong> Anonymized data retained for 2 years for service improvement</li>
                        <li><strong>Support Communications:</strong> Retained for 1 year for quality assurance</li>
                        <li><strong>Payment Records:</strong> Maintained by PayPal according to their policies</li>
                    </ul>

                    <h3>Data Deletion</h3>
                    <p>You can request deletion of your data at any time. Upon subscription cancellation, personal data is automatically deleted within 30 days.</p>

                    <h2>6. Your Rights and Choices</h2>

                    <h3>Control Options</h3>
                    <ul>
                        <li><strong>Data Access:</strong> Request a copy of your personal data</li>
                        <li><strong>Data Correction:</strong> Update or correct inaccurate information</li>
                        <li><strong>Data Deletion:</strong> Request deletion of your personal data</li>
                        <li><strong>Data Portability:</strong> Export your data in a machine-readable format</li>
                        <li><strong>Opt-Out:</strong> Disable analytics and non-essential data collection</li>
                        <li><strong>Subscription Control:</strong> Cancel subscription through PayPal without penalty</li>
                    </ul>

                    <h3>How to Exercise Your Rights</h3>
                    <p>Contact us at <a href="mailto:privacy@highdalink.com">privacy@highdalink.com</a> with your request. We will respond within 30 days and verify your identity before processing requests.</p>

                    <h2>7. Cookies and Tracking Technologies</h2>

                    <h3>Types of Cookies</h3>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand usage patterns (optional)</li>
                    </ul>

                    <h3>Cookie Management</h3>
                    <p>You can control cookies through your browser settings or extension preferences. Disabling essential cookies may limit functionality.</p>

                    <h2>8. Third-Party Links</h2>
                    <p>Our extension may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies.</p>

                    <h2>9. International Data Transfers</h2>
                    <p>Your data may be processed in countries other than your own. We ensure adequate protection through:</p>
                    <ul>
                        <li>Standard Contractual Clauses (SCCs)</li>
                        <li>Adequacy decisions by relevant authorities</li>
                        <li>Other legally recognized transfer mechanisms</li>
                    </ul>

                    <h2>10. Children's Privacy</h2>
                    <p>Penalty Shield is not intended for children under 13. We do not knowingly collect information from children. If we become aware of such collection, we will delete the information immediately.</p>

                    <h2>11. Changes to This Privacy Policy</h2>
                    <p>We may update this policy periodically. Significant changes will be communicated through:</p>
                    <ul>
                        <li>Extension notifications</li>
                        <li>Email notifications to subscribers</li>
                        <li>Updates on our website</li>
                    </ul>
                    <p>Continued use of the extension after changes constitutes acceptance of the updated policy.</p>

                    <h2>12. Contact Information</h2>
                    <div class="contact-info">
                        <h3 style="color: white; margin-top: 0;">Privacy Questions and Requests</h3>
                        <p><strong>Privacy Officer:</strong></p>
                        <ul style="margin-bottom: 15px;">
                            <li><strong>Email:</strong> <a href="mailto:privacy@highdalink.com">privacy@highdalink.com</a></li>
                            <li><strong>General Support:</strong> <a href="mailto:support@highdalink.com">support@highdalink.com</a></li>
                            <li><strong>Website:</strong> <a href="https://highdalink.com" target="_blank">https://highdalink.com</a></li>
                            <li><strong>Response Time:</strong> 48-72 hours for privacy inquiries</li>
                        </ul>
                        <p><strong>Data Subject Requests:</strong> Contact our privacy officer for data access, correction, or deletion requests. Include your email address and specific request details.</p>
                    </div>

                    <h2>13. GDPR Compliance (EU Users)</h2>
                    <p>For users in the European Union, we comply with the General Data Protection Regulation (GDPR):</p>
                    <ul>
                        <li><strong>Legal Basis:</strong> Legitimate interest for SEO analysis, consent for marketing</li>
                        <li><strong>Data Protection Officer:</strong> Available at <a href="mailto:dpo@highdalink.com">dpo@highdalink.com</a></li>
                        <li><strong>Supervisory Authority:</strong> You may lodge complaints with your local data protection authority</li>
                        <li><strong>Data Transfers:</strong> Adequate safeguards in place for international transfers</li>
                    </ul>

                    <h2>14. CCPA Compliance (California Users)</h2>
                    <p>For California residents, under the California Consumer Privacy Act (CCPA):</p>
                    <ul>
                        <li><strong>Right to Know:</strong> Request information about personal data collection and use</li>
                        <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
                        <li><strong>Right to Opt-Out:</strong> Opt-out of sale of personal information (we do not sell data)</li>
                        <li><strong>Non-Discrimination:</strong> We will not discriminate for exercising CCPA rights</li>
                    </ul>

                    <div class="highlight" style="margin-top: 30px;">
                        <p><strong>Privacy Summary:</strong> Penalty Shield prioritizes your privacy by processing data locally when possible, requesting minimal permissions, collecting only necessary information, and never selling personal data. Your SEO monitoring data remains private and secure, with full transparency about our practices.</p>
                    </div>
                  </div>
                  
                  <script>
                    // Auto-update the date
                    document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    // Add smooth scrolling for better UX
                    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                        anchor.addEventListener('click', function (e) {
                            e.preventDefault();
                            const target = document.querySelector(this.getAttribute('href'));
                            if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }
                        });
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
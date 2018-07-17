## Overview

<!--- __Explanation:__ This section gives a quick introduction to your security overview. It provides with contact details and a link to your security.txt if you have any. --->

<!--- __Customization:__ Change the contact email. Remove the [Securitytxt](https://securitytxt.org/) link if you don’t have any. --->

Keeping our customers' data protected at all times is our highest priority. This security overview provides a high-level overview of the security practices put in place to achieve that objective.
Have questions or feedback? Feel free to reach out to us at [security@DOMAIN](mailto:security@DOMAIN)

Our security.txt can be accessed [here](DOMAIN/security.txt).

## Dedicated Security Team

<!--- __Recommended for:__ >Series A/Series B startups. If you handle sensitive data this hire should probably come as soon as possible. --->

<!--- __Explanation:__ A dedicated team (or employee) shows additional commitment to the security of your data. Add this section if you have at least ½ an employee dedicated to improving the security of your company. Add more information (specific achievements or past roles of your team members) if you think it brings value. --->

<!--- __Customization:__ Minor customization required. --->

Our security team is comprised of security experts dedicated to improving the security of our organization. Our employees are trained on security incident response and are on call 24/7.

## Infrastructure

<!--- __Recommended for:__ Every company, except if you don’t collect sensitive user data or don’t have users. --->

<!--- __Explanation:__ This section is required in every security overview. It explains your overall infrastructure security. Your infra can either be a managed data center (AWS, Google Cloud, Heroku, etc.) or a physical data center (managed by you or a third-party). --->

<!--- __Customization:__ Add the sub-section(s) that fits your company. --->

### Cloud infrastructure

<!--- __Explanation:__ Use this section if your company’s infrastructure is based on a cloud provider. --->

<!--- __Customization:__ Minor customization. Choose your cloud provider. Delete irrelevant names and links. --->

All of our services run in the cloud. We don’t host or run our own routers, load balancers, DNS servers, or physical servers.
Our service is built on [Amazon Web Services | Google Cloud Platform | Microsoft Azure | Heroku |…]. They provide strong security measures to protect our infrastructure and are compliant with most certifications. You can read more about their practices here:
- [AWS](https://aws.amazon.com/security/)
- [Google Cloud Platform](https://cloud.google.com/security/)
- [Microsoft Azure](https://www.microsoft.com/en-us/trustcenter/security)
- [Heroku](https://www.heroku.com/policy/security)

### Data center security

<!--- __Explanation:__ Use this section if you use a physical data center to store and process your data. --->

<!--- __Customization:__ Very customizable - You should detail the security efforts in your data center. Important points to mention are: locations (countries), [The data center tiers or certifications](https://en.wikipedia.org/wiki/Data_center#Data_center_levels_and_tiers), how the machines are separated from other data center customers, security controls (guards, power supply, etc.) --->

Our data center is located in the United States. It is a Tier IV, PCI DSS, and ISO 27001 compliant facility.
Our servers are physically separated from other data center customers.
The data center facilities are protected 24/7 with different security measures (guards, CCTV, electronic access control, etc.). Monitoring and alerting is in place for security breaches, power, HVAC, and temperature.

## Network level security monitoring and protection

<!--- __Recommended for:__ Every company. --->

<!--- __Explanation:__ This section describes the tools in place to monitor and/or protect your network. Isolating networks and restricting accesses to internal services with assigned private IP addresses are security best practices you should follow as soon as possible. --->

<!--- __Customization:__ Medium customization. Delete the best practices you’re not following. --->

Our network security architecture consists of multiple security zones. We monitor and protect our network, to make sure no unauthorized access is performed using:
- A virtual private cloud (VPC), a bastion host or VPN with network access control lists (ACL’s) and no public IP addresses.
- A firewall that monitors and controls incoming and outgoing network traffic.
- An Intrusion Detection and/or Prevention technologies (IDS/IPS) solution that monitors and blocks potential malicious packets.
- IP address filtering

## DDoS protection

<!--- __Recommended for:__ >Series B companies where availability is a big business risk (think e-commerce, business relying on ads or APIs, etc.). --->

<!--- __Explanation:__ DDoS attacks consist of flooding a target with excessive requests to overload systems and stop legitimate requests. DDoS attacks shouldn’t be a big concern for smaller websites. This section describes the tools in place to mitigate DDoS attacks. Add this section to your overview if you use a CDN like Cloudflare, Incapsula, Akamai, etc. --->

<!--- __Customization:__ No customization. You can name your provider. Delete section if no DDoS protection is in place. --->

We use Distributed Denial of Service (DDoS) mitigation services powered by an industry-leading solution.

## Data encryption

<!--- __Recommended for:__ Every company, except if you don’t collect sensitive user data or don’t have users. --->

<!--- __Explanation:__ This part explains the encryption strategy at rest and in transit. There is no good reason not to do data encryption from day one. From data in transit (check your website with [SSLLabs](https://www.ssllabs.com) to encryption at rest ([in a database](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html) or on your machine’s hard drives). To secure your user's passwords, you should either use [one-way encryption on salted passwords](https://blogs.dropbox.com/tech/2016/09/how-dropbox-securely-stores-your-passwords/) or use [bcrypt](https://en.wikipedia.org/wiki/Bcrypt). --->

<!--- __Customization:__ You could add more information on your encryption strategy (e.g. algorithm used), but it’s not required. --->

Encryption in transit: All data sent to or from our infrastructure is encrypted in transit via industry best-practices using Transport Layer Security (TLS). You can see our SSLLabs report [here](https://www.ssllabs.com/ssltest/analyze.html?d=DOMAIN)
Encryption at rest: All our user data (including passwords) is encrypted using battled-proofed encryption algorithms in the database.

## Data retention and removal

<!--- __Recommended for:__ Every company, except if you don’t collect sensitive user data or don’t have users. --->

<!--- __Explanation:__ It’s a good practice to delete user data if not used. This should ideally happen after a specific period and on user request (also required for GDPR). Use this section if you have procedures in place to remove user data (after a period or user request). --->

<!--- __Customization:__ Highly customizable. Adapt the section to reflect your practices and define “usage data” (it could be events, logs etc.). Link to your privacy page. --->

We retain your usage data for a period of 90 days after your trial. All data is then completely removed from the dashboard and server.
Every user can request the removal of usage data by contacting support.
Read more about our privacy settings at [DOMAIN/privacy](DOMAIN/privacy).


## Business continuity and disaster recovery

<!--- __Recommended for:__ Every company. --->

<!--- __Explanation:__ Backing up your critical assets is essential to ensure business continuity after a disaster. Add this section if you’re backing up data and if you test them regularly. Make sure your backups are properly encrypted. --->

<!--- __Customization:__ No customization. --->

We back up all our critical assets and regularly attempt to restore the backup to guarantee a fast recovery in case of disaster. All our backups are encrypted.


## Application security monitoring

<!--- __Recommended for:__ >Series A/Series B startups or earlier if you handle sensitive customer data. --->

<!--- __Explanation:__ This section describes the tools in place to monitor the security of your application in real-time. Being able to react quickly to attacks is key to limit damage. Add this section to your overview if you use an application security monitoring solution. --->

<!--- __Customization:__ Medium customization. Delete the tools you’re not using. --->

- We use a security monitoring solution to get visibility into our application security, identify attacks and respond quickly to a data breach.
- We use technologies to monitor exceptions, logs and detect anomalies in our applications.
- We collect and store logs to provide an audit trail of our applications activity.
- We use monitoring such as open tracing in our microservices.

## Application security protection

<!--- __Recommended for:__ >Series A/Series B startups or earlier if you handle sensitive customer data. --->

<!--- __Explanation:__ This section describes the tools in place to protect your application from attacks in real-time. Most of the serious data breaches come from application vulnerabilities. Add this section to your overview if you use an application security protection tool to prevent data leaks or takeovers. --->

<!--- __Customization:__ Medium customization. Delete the tools you’re not using. --->

- We use a runtime protection system that identifies and blocks OWASP Top 10 and business logic attacks in real-time.
- We use security headers to protect our users from attacks. You can check our grade on [this security scanner](https://www.sqreen.io/scan?url=https%3A%2F%2FDOMAIN).
- We use security automation capabilities that automatically detect and respond to threats targeting our apps.

## Secure development

<!--- __Recommended for:__ >Series A/Series B startups. --->

<!--- __Explanation:__ This part describes the tools and processes in place to avoid pushing code vulnerabilities to production. The more mature the company, the more tools you should have in place. --->

<!--- __Customization:__ Delete the tools you don’t use. --->

We develop following security best practices and frameworks (OWASP Top 10, SANS Top 25). We use the following best practices to ensure the highest level of security in our software:
- Developers participate in regular security training to learn about common vulnerabilities and threats
- We review our code for security vulnerabilities
- We regularly update our dependencies and make sure none of them has known vulnerabilities
- We use Static Application Security Testing (SAST) to detect basic security vulnerabilities in our codebase
- We use Dynamic Application Security Testing (DAST) to scan our applications
- We rely on [yearly | bi-annually | quarterly] third-party security experts to perform penetration tests of our applications.

## Responsible disclosure

<!--- __Recommended for:__ >Series A/Series B startups. --->

<!--- __Explanation:__ Use this section if you welcome responsible disclosure (you should). It describes your bug bounty policy and coverage. A high proportion of reported issues aren’t relevant, so be sure to have internal security knowledge to triage and respond to reports quickly. It is a best practice to reward security researchers (within the range of possibility for you). --->

<!--- __Customization:__ Low customizations. Adapt the coverage and exclusions, and add the proper contact email or [keybase](https://keybase.io/). Using a hosted public bug bounty program on HackerOne or BugCrowd? Just replace the content of this section with a link to your profile. --->

We encourage everyone that practices responsible disclosure and comply with our policies and terms of service to participate in our bug bounty program.
Please avoid automated testing and only perform security testing with your own data. Please do not disclose any information regarding the vulnerabilities until we fix them. Rewards are done at our discretion depending on the criticality of the vulnerability reported.

You can report vulnerabilities by contacting [security@DOMAIN](mailto:security@DOMAIN). Please include a proof of concept. We will respond as quickly as possible to your submission and won’t take legal actions if you follow the rules.

**Coverage**
- *.DOMAIN

**Exclusions**
- blog.DOMAIN
- docs.DOMAIN
- status.DOMAIN
- support.DOMAIN

**Accepted vulnerabilities are the following:**
- Cross-Site Scripting (XSS)
- Open redirect
- Cross-site Request Forgery (CSRF)
- Command/File/URL inclusion
- Authentication issues
- Code execution
- Code or database injections

**This bug bounty program does NOT include:**
- Logout CSRF
- Account/email enumerations
- Denial of Service (DoS)
- Attacks that could harm the reliability/integrity of our business
- Spam attacks
- Clickjacking on pages without authentication and/or sensitive state changes
- Mixed content warnings
- Lack of DNSSEC
- Content spoofing / text injection
- Timing attacks
- Social engineering
- Phishing
- Insecure cookies for non-sensitive cookies or 3rd party cookies
- Vulnerabilities requiring exceedingly unlikely user interaction
- Exploits that require physical access to a user's machine

## User protection

<!--- __Recommended for:__ >Series A/Series B startups or earlier if you handle medical/financial data or have enterprise customers.  --->

<!--- __Explanation:__ This section provides additional safety for your customers. Data breaches using account takeovers are on the rise. Adding product security features to protect your users is a good practice. Add this section if you implemented product security features like: 2-factor authentication, rate limiting, delegate authentication, etc.  --->

<!--- __Customization:__ Customization needed. Delete the features your product doesn’t offer and add more detail.  --->

**2-factor authentication**

We provide a 2-factor authentication mechanism to protect our users from account takeover attacks. Setting up this extra security measure is optional but highly recommended to increase the security of sensitive data.

**Account takeover protection**

We protect our users against data breaches by monitoring and blocking brute force attacks.

**Single sign-on**

Single sign-on (SSO) is offered for our enterprise customers.
Single sign-on (SSO) is available using your Google account.

**Role-based access control**

Role-based access control (RBAC) is offered on all our accounts and allows our users to define roles and permissions.

## Compliance
<!--- __Recommended for:__ >Series A/Series B startups or earlier if you handle medical/financial data or have enterprise customers.  --->

<!--- __Explanation:__ This section is key for some businesses. You should add this section if your company is certified or compliant to specific regulations.  --->

<!--- __Customization:__ Very customizable. Choose the elements you’re compliant to. Do not hesitate to link to other pages or resources that detail more your compliance.  --->

**HIPAA**

- Our company is compliant with the Health Insurance Portability and Accountability Act of 1996 (HIPAA). We protect the privacy and security of your protected health information (PHI) in accordance with the very strict requirements of [HIPAA](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html),
- Our company offers HIPAA BAA agreements to enterprise companies that need to comply with HIPAA regulations.

**SOC2**

Our company is [SOC 2 Type [1 | 2]](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html) certified, which means that an independent auditor has evaluated our product, infrastructure, and policies, and certifies that we meet or exceed specific levels of controls and processes for the security of user data.

**EU-U.S. and Swiss-U.S. Privacy Shield**

Our company conforms with the EU-U.S. and Swiss-U.S. Privacy Shield Frameworks for regulating data privacy between the European Union and the United States.

**PCI Compliance**

We process and store your payment information in accordance with the Payment Card Industry Data Security Standards ([PCI DSS](https://www.pcisecuritystandards.org/)). We have been audited by an independent PCI Qualified Security Assessor (QSA) and are certified as a PCI Service Provider.

**ISO 27001**

Our company is [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) certified. This standard provides a framework for establishing, and maintaining an information security management system (ISMS) to secure sensitive information through a risk management process that combines IT systems, people and processes.

**GDPR**

We’re compliant to the General Data Protection Regulation (GDPR). The purpose of GDPR is to protect the private information of EU citizens and give them more control over their personal data. Contact us for more details on how we comply to GDPR.

## Payment information

<!--- __Recommended for:__ All companies accepting payments. --->

<!--- __Explanation:__ Add this section to your overview to state your security practices regarding payment processing and storage. If you use a third-party to handle payments mention it and state that you are therefore not subject to PCI compliance. If you process payments yourself, keep the part on PCI compliance. --->

<!--- __Customization:__ Delete the paragraph that isn’t relevant to your company. Choose or add your payment provider. --->

- All payment instrument processing is safely outsourced to [Stripe | Braintree] which is certified as a PCI Level 1 Service Provider. We don’t collect any payment information and are therefore not subject to PCI obligations.
- We safely process and store your payment information following the strict Payment Card Industry Data Security Standards (PCI DSS). We are certified as a PCI Service Provider.

## Employee access

<!--- __Recommended for:__ >Series A/Series B. --->

<!--- __Explanation:__ This section explains your policy on internal access to user data. You should limit access as much as possible. Acceptable use cases are for support, debugging, etc. Mature companies should also implement strong audit logs. --->

<!--- __Customization:__ This section should be customized to reflect your internal practices. --->

- Our strict internal procedure prevents any employee or administrator from gaining access to user data. Limited exceptions can be made for customer support.
- All our employees sign a Non-Disclosure and Confidentiality Agreement when joining the company to protect our customers' sensitive information.

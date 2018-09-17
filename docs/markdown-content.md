## Overview

Keeping our customers' data protected at all times is our highest priority. This security overview provides a high-level overview of the security practices put in place to achieve that objective.
Have questions or feedback? Feel free to reach out to us at [security@codacy.com](mailto:security@codacy.com)

## Dedicated Security Team

Our security team is comprised of security experts dedicated to improving the security of our organization. Our employees are trained on security incident response and are on call 24/7.

## Infrastructure

### Cloud infrastructure

All of our services run in the cloud. We don’t host or run our own routers, load balancers, DNS servers, or physical servers.
Our service is built on Amazon Web Services. They provide strong security measures to protect our infrastructure and are compliant with most certifications. You can read more about their practices here:
- [AWS](https://aws.amazon.com/security/)

## Network level security monitoring and protection

Our network security architecture consists of multiple security zones. We monitor and protect our network, to make sure no unauthorized access is performed using:
- A virtual private cloud (VPC), a bastion host or VPN with network access control lists (ACL’s) and no public IP addresses.
- A firewall that monitors and controls incoming and outgoing network traffic.
- IP address filtering

## Data encryption

Encryption in transit: All data sent to or from our infrastructure is encrypted in transit via industry best-practices using Transport Layer Security (TLS). You can see our SSLLabs report [here](https://www.ssllabs.com/ssltest/analyze.html?d=codacy.com)
Encryption at rest: All our user data is encrypted using battled-proofed encryption algorithms in the database.

## Data retention and removal

We retain your usage data after your trial.
Every user can request the removal of usage data by contacting support or deleting his account.
Read more about our privacy settings at [codacy.com/privacy](https://www.codacy.com/privacy).

## Business continuity and disaster recovery

We back up all our critical assets and regularly attempt to restore the backup to guarantee a fast recovery in case of disaster. All our backups are encrypted.

## Application security monitoring

- We use a security monitoring solution to get visibility into our application security, identify attacks and respond quickly to a data breach.
- We use technologies to monitor exceptions, logs and detect anomalies in our applications.
- We collect and store logs to provide an audit trail of our applications activity.
- We use monitoring such as open tracing in our microservices.

<!--
## Application security protection

<!--- __Recommended for:__ >Series A/Series B startups or earlier if you handle sensitive customer data. --->

<!--- __Explanation:__ This section describes the tools in place to protect your application from attacks in real-time. Most of the serious data breaches come from application vulnerabilities. Add this section to your overview if you use an application security protection tool to prevent data leaks or takeovers. --->

<!--- __Customization:__ Medium customization. Delete the tools you’re not using. --->
<!---
- We use a runtime protection system that identifies and blocks OWASP Top 10 and business logic attacks in real-time.
- We use security headers to protect our users from attacks. You can check our grade on [this security scanner](https://www.sqreen.io/scan?url=https%3A%2F%2Fcodacy.com).
- We use security automation capabilities that automatically detect and respond to threats targeting our apps.
--->

## Secure development

We develop following security best practices and frameworks (OWASP Top 10, SANS Top 25). We use the following best practices to ensure the highest level of security in our software:
- Developers participate in regular security training to learn about common vulnerabilities and threats
- We review our code for security vulnerabilities
- We regularly update our dependencies and make sure none of them has known vulnerabilities
- We use Static Application Security Testing (SAST) to detect basic security vulnerabilities in our codebase
- We use Dynamic Application Security Testing (DAST) to scan our applications

## Responsible disclosure

We encourage everyone that practices responsible disclosure and comply with our policies and terms of service to participate in our bug bounty program.
Please avoid automated testing and only perform security testing with your own data. Please do not disclose any information regarding the vulnerabilities until we fix them. Rewards are done at our discretion depending on the criticality of the vulnerability reported.

You can report vulnerabilities by contacting [security@codacy.com](mailto:security@codacy.com). Please include a proof of concept. We will respond as quickly as possible to your submission and won’t take legal actions if you follow the rules.

* Let us know as soon as possible upon discovery of a potential security issue, and we'll make every effort to quickly resolve the issue.
* Provide us a reasonable amount of time to resolve the issue before any disclosure to the public or a third-party.
* Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service. Only interact with accounts you own or with explicit permission of the account holder.

### Reports must include
* A Proof of Concept
* Detailed steps on how to reproduce the vulnerability
* Explanation of how the attack could be executed in a real world scenario to compromise user accounts or data

### Rules for us
* Reply as quickly as possible to your submission and keep you updated.
* Not take legal action against you if you play by the rules.
* Reward you with a fair bounty.

**Coverage**
- *.codacy.com

**Exclusions**
- try.codacy.com
- status.codacy.com
- support.codacy.com
- scala.codacy.com
- opensource.codacy.com
- blog.codacy.com

**Accepted vulnerabilities are the following:**
- Cross-Site Scripting (XSS)
- Open redirect
- Cross-site Request Forgery (CSRF)
- Command/File/URL inclusion
- Authentication issues
- Code execution
- Code or database injections

**This bug bounty program does NOT include:**
- Invite/Promo code enumeration.
- Open redirects. 99% of open redirects have low security impact. For the rare cases where the impact is higher, e.g., stealing oauth tokens, we do still want to hear about them.
- Publicly accessible login panels - These generally have low security impact and are in software that Codacy runs but doesn’t control.
- Reports that state that software is out of date/vulnerable without a proof of concept.
- Host header issues without an accompanying proof-of-concept demonstrating vulnerability.
- XSS issues that affect only outdated browsers.
- Stack traces that disclose information.
- Best practices concerns.
- Highly speculative reports about theoretical damage. Be concrete.
- Self-XSS that can not be used to exploit other users (this includes having a user paste JavaScript into the browser console).
- Vulnerabilities as reported by automated tools without additional analysis as to how they're an issue.
- Reports from automated web vulnerability scanners (Acunetix, Vega, etc.) that have not been validated.
- Denial of Service Attacks.
- Reflected File Download (RFD).
- window.opener-related issues.
- Physical or social engineering attempts (this includes phishing attacks against Codacy employees).
- Content injection issues.
- Cross-site Request Forgery (CSRF) with minimal security implications (Logout CSRF, etc.)
- Missing cookie flags on non-security-sensitive cookies.
- Issues that require physical access to a victim’s computer.
- Missing security headers that do not present an immediate security vulnerability.
- Fraud issues
- SSL/TLS scan reports (this means output from sites such as SSL Labs).
- Banner grabbing issues (figuring out what web server we use, etc.).
- Open ports without an accompanying proof-of-concept demonstrating vulnerability.
- Recently disclosed 0day vulnerabilities. We need time to patch our systems just like everyone else :)
- Bugs that don’t affect the latest version of modern browsers or related to browser extensions.
- Bugs requiring unlikely user interaction.
- Bugs, such as timing attacks, that prove the existence of a private repository or user.
- Disclosure of public information and information that does not present significant risk.
- Bugs that have already been submitted by another user, that we are already aware of, or that have been classified as ineligible.
- Vulnerabilities that Codacy determines to be an accepted risk will not be eligible for a paid bounty or listing on the site.
- Scripting or other automation and brute forcing of intended functionality.
- When in doubt, email us: security@codacy.com.

### Things you should expect to receive little to no bounty for

- Microsites with little to no user data
- Issues requiring user-interaction
- Most brute forcing issues

## User protection

**Single sign-on**

Single sign-on (SSO) is offered for our enterprise customers.
Single sign-on (SSO) is available using your Google, GitHub or BitBucket account.

**Role-based access control**

Role-based access control (RBAC) is offered on all our accounts and allows our users to define roles and permissions.

## Compliance

**GDPR**

We’re compliant to the General Data Protection Regulation (GDPR). The purpose of GDPR is to protect the private information of EU citizens and give them more control over their personal data. Contact us for more details on how we comply to GDPR.

## Payment information

- All payment instrument processing is safely outsourced to Stripe which is certified as a PCI Level 1 Service Provider. We don’t collect any payment information and are therefore not subject to PCI obligations.

## Employee access

- Our strict internal procedure prevents any employee or administrator from gaining access to user data. Limited exceptions can be made for customer support.
- All our employees sign a Non-Disclosure and Confidentiality Agreement when joining the company to protect our customers' sensitive information.

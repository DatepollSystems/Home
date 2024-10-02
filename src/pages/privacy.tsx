import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function ImprintPage() {
    return (
        <Layout title="Privacy Policy">
            <main className="container margin-vert--lg">
                <h1>Privacy Policy</h1>

                <h3>Introduction</h3>
                <p>
                    We are committed to respecting your privacy and protecting any personal data you may share with us.
                    This privacy policy explains how we handle data in accordance with the European General Data
                    Protection Regulation (GDPR).
                </p>

                <h3>Data Collection</h3>
                <p>
                    We do not collect, store or share any personal data through this website.<br/>
                    This Website also does not use cookies.
                </p>

                <h3>GitHub Pages Service</h3>
                <p>
                    This Website is hosted as a GitHub Pages website. While we do not collect any data, GitHub may
                    collect User Personal Information from visitors to this GitHub Pages website, including logs of
                    visitor IP addresses, to comply with legal obligations, and to maintain the security and integrity
                    of this Website and the Service. See the <Link
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">GitHub
                    Privacy Statement</Link> for details.
                </p>

                <h3>External Links</h3>
                <p>
                    Our website may contain links to external websites or services that are not operated by us. Please
                    be aware that we have no control over the content and privacy practices of these external sites.
                    Once you leave our website by following a link, you should review the privacy policy of the
                    third-party site to understand how your data may be collected and processed.
                </p>
                <p>
                    We are not responsible for the privacy policies, content, or data handling practices of any
                    third-party websites.
                </p>

                <h3>Changes to this Policy</h3>
                <p>
                    We may update this privacy policy from time to time to reflect changes in legal requirements or
                    our data practices. Any updates will be posted on this page.
                </p>

                <h3>Contact Us</h3>
                <p>
                    If you have any questions or concerns regarding this privacy policy or how your data is handled,
                    please contact us at <a
                    href="mailto:privacy@datepollsystems.org">privacy@datepollsystems.org</a>.
                </p>
            </main>
        </Layout>
    )
}
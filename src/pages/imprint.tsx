import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function ImprintPage() {
    return (
        <Layout title="Imprint">
            <main className="container margin-vert--lg">
                <h1>Imprint</h1>

                <h3>Media owner</h3>
                <ul>
                    <li>Alexander Kauer, AT-2095 Drosendorf-Zissersdorf</li>
                    <li>Dominik Dafert, AT-1100 Wien</li>
                    <li>Fabian Schedler, AT-8020 Graz</li>
                </ul>

                <h3>Contact</h3>
                <p>
                    E-Mail: <a href="mailto:contact@datepollsystems.org">contact@datepollsystems.org</a>
                </p>

                <h2>Disclaimer</h2>
                <h3>1. Limitation of liability</h3>
                <p>
                    The contents of the website have been created with the utmost care and to the best of our knowledge.
                    Nevertheless, the provider of this website does not assume any liability for the topicality,
                    completeness and correctness of the pages and content provided.
                </p>

                <h3>2. External links</h3>
                <p>
                    The website contains links to other websites on whose content the provider of the website has no
                    influence. For this reason, the provider cannot assume any liability for this content.
                    The respective provider of the linked website is responsible for the content and accuracy of the
                    information provided. No legal violations were apparent at the time of linking. Upon becoming aware
                    of such infringement, the link will be removed immediately.
                </p>

                <h3>3. Privacy</h3>
                <p>See <Link to="/privacy">Privacy Policy</Link> for details.</p>

                <h3>4. Information on legal infringements</h3>
                <p>
                    If you notice any legal violations within this website, please inform us about them. Upon notice,
                    illegal content and links will be removed immediately.
                </p>

                <h3>5. Copyright</h3>
                <p>
                    The content and works on these pages created by the site operators are subject to copyright law.
                    Duplication, processing, distribution, and any form of commercialization of such material beyond the
                    scope of copyright law require the written consent of the respective author or creator. Downloads
                    and copies of these pages are only permitted for private, non-commercial use.
                </p>
                <p>
                    As far as content on this site is not created by the operator, third-party copyrights are respected.
                    In particular, third-party content is identified as such. If you nonetheless notice any copyright
                    infringement, please inform us. Upon notification of such violations, we will remove the content
                    immediately.
                </p>
            </main>
        </Layout>
    )
}
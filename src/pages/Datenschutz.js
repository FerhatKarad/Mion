import DefaultNavbar from 'components/DefaultNavbar';
import Page from 'components/login/Page';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';

export default function Datenschutz() {
    return (
        <Page>
            <DefaultNavbar />
            <section className="pb-60 relative block bg-gray-200">
                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <H4 color="gray">DATENSCHUTZERKLÄRUNG</H4>
                        <LeadText color="blueGray">
                            Anbieter und verantwortliche Stelle im Sinne des Datenschutzgesetzes
                            <br />
                            <span className='text-xl color-blue'>Mion Protect GmbH</span>
                            <br />
                            Geschäftsführer: Herr Alexander Heizenreider,
                            Sikingenstr. 26
                            10553 Berlin
                        </LeadText>
                        <LeadText color="blueGray">
                            Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt
                            Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                            Vorschriften. Da durch neue Technologien und die ständige Weiterentwicklung dieser
                            Webseite Änderungen an dieser Datenschutzerklärung vorgenommen werden können,
                            empfehlen wir Ihnen sich die Datenschutzerklärung in regelmäßigen
                            Abständen wieder durchzulesen.
                            <br />
                            <span className='text-sm'>Definitionen der verwendeten Begriffe
                                (z.B. “personenbezogene Daten” oder “Verarbeitung”) finden Sie in Art. 4 DSGVO.</span>
                            <br />
                            <br />
                            <H6 color="gray">Zugriffsdaten</H6>
                            Wir, der Websitebetreiber bzw. Seitenprovider, erheben aufgrund unseres berechtigten Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO)
                            Daten über Zugriffe auf die Website und speichern diese als „Server-Logfiles“
                            auf dem Server der Website ab. Folgende Daten werden so protokolliert:
                            <ul className='	list-disc'>
                                <li>
                                    Besuchte Website
                                </li>
                                <li>
                                    Uhrzeit zum Zeitpunkt des Zugriffes                                </li>
                                <li>
                                    Menge der gesendeten Daten in Byte
                                </li>
                                <li>
                                    Quelle/Verweis, von welchem Sie auf die Seite gelangten
                                </li>
                                <li>
                                    Verwendeter Browser
                                </li>
                                <li>
                                    Verwendetes Betriebssystem
                                </li>
                                <li>
                                    Verwendete IP-Adresse
                                </li>
                            </ul>
                            Die Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend gelöscht.
                            Die Speicherung der Daten erfolgt aus Sicherheitsgründen, um z. B. Missbrauchsfälle
                            aufklären zu können. Müssen Daten aus Beweisgründen aufgehoben werden,
                            sind sie solange von der Löschung ausgenommen bis der Vorfall endgültig geklärt ist.
                            <br />
                            <br />
                            <H6 color="gray">Reichweitenmessung & Cookies</H6>
                            Diese Website verwendet Cookies zur pseudonymisierten Reichweitenmessung,
                            die entweder von unserem Server oder dem Server Dritter an den Browser des Nutzers
                            übertragen werden. Bei Cookies handelt es sich um kleine Dateien,
                            welche auf Ihrem Endgerät gespeichert werden.
                            Ihr Browser greift auf diese Dateien zu.
                            Durch den Einsatz von Cookies erhöht sich die Benutzerfreundlichkeit
                            und Sicherheit dieser Website.
                            Falls Sie nicht möchten, dass Cookies zur Reichweitenmessung auf Ihrem Endgerät
                            gespeichert werden, können Sie dem Einsatz dieser Dateien hier widersprechen:
                            <br />
                            <br />
                            <ul className='list-disc'>
                                <li className='text-sm'>
                                    Cookie-Deaktivierungsseite der Netzwerkwerbeinitiative:<a href='http://optout.networkadvertising.org/?c=1#!/'>http://optout.networkadvertising.org/?c=1#!/</a>
                                </li>
                                <li className='text-sm'>
                                    Cookie-Deaktivierungsseite der US-amerikanischen Website:<a href='http://optout.aboutads.info/?c=2#!/'>http://optout.aboutads.info/?c=2#!/</a>
                                </li>
                                <li className='text-sm'>
                                    Cookie-Deaktivierungsseite der europäischen Website:<a href='http://optout.networkadvertising.org/?c=1#!/'>http://optout.networkadvertising.org/?c=1#!/</a>

                                </li>
                            </ul>
                            <br />
                            Gängige Browser bieten die Einstellungsoption, Cookies nicht zuzulassen. Hinweis: Es ist nicht gewährleistet, dass Sie auf alle Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn Sie entsprechende Einstellungen vornehmen.

                            Erfassung und Verarbeitung personenbezogener Daten <br />
                            Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen
                            Daten nur dann weiter, wenn dies im gesetzlichen Rahmen erlaubt ist oder
                            Sie in die Datenerhebung einwilligen.<br />
                            Als personenbezogene Daten gelten sämtliche Informationen,
                            welche dazu dienen, Ihre Person zu bestimmen und welche zu Ihnen
                            zurückverfolgt werden können – also beispielsweise Ihr Name, Ihre E-Mail-Adresse
                            und Telefonnummer.<br />
                            Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer Person zu machen.
                            Zur Verbesserung unseres Online-Angebotes speichern wir
                            jedoch (ohne Personenbezug) Ihre Zugriffsdaten auf diese Website. Zu diesen Zugriffsdaten
                            gehören z. B. die von Ihnen angeforderte Datei oder der Name
                            Ihres Internet-Providers. Durch die Anonymisierung
                            der Daten sind Rückschlüsse auf Ihre Person nicht möglich.
                            <br />
                            <br />

                            <ul className='list-disc'>
                                <li className='text-sm'>
                                    Welche? – Wir verarbeiten personenbezogene Daten wie Vorname, Nachname, IP-Adresse, E-Mail-Adresse, Wohnort, Postleitzahl und Inhaltsangaben aus dem Kontaktformular.
                                </li>
                                <li className='text-sm'>
                                    Wie? – Wir verarbeiten personenbezogene Daten nur nach ausdrücklicher Erlaubnis der betreffenden Nutzer und unter Einhaltung der geltenden Datenschutzbestimmungen.
                                </li>
                                <li className='text-sm'>
                                    Warum? – Die Verarbeitung der personenbezogenen Daten erfolgt aufgrund unseres berechtigten Interesses zur Erfüllung unserer vertraglich vereinbarten Leistungen und zur Optimierung unseres Online-Angebotes.

                                </li>
                            </ul>
                            <br />

                            <H6 color="gray">Umgang mit Kontaktdaten</H6>
                            Nehmen Sie mit uns als Websitebetreiber durch die angebotenen Kontaktmöglichkeiten
                            Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage
                            zurückgegriffen werden kann. Ohne Ihre Einwilligung werden
                            diese Daten nicht an Dritte weitergegeben.

                            <br />
                            <br />

                            <H6 color="gray">Umgang mit Kommentaren und Beiträgen</H6>
                            Hinterlassen Sie auf dieser Website einen Beitrag oder Kommentar,
                            wird Ihre IP-Adresse gespeichert. Dies erfolgt aufgrund unserer
                            berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO
                            und dient der Sicherheit von uns als Websitebetreiber:
                            Denn sollte Ihr Kommentar gegen geltendes Recht verstoßen,
                            können wir dafür belangt werden, weshalb wir ein Interesse
                            an der Identität des Kommentar- bzw. Beitragsautors haben.

                            <br />
                            <br />
                            <H6 color="gray">Google Analytics</H6>
                            Diese Website nutzt aufgrund unserer berechtigten Interessen
                            zur Optimierung und Analyse unseres Online-Angebots im Sinne des
                            Art. 6 Abs. 1 lit. f. DSGVO den Dienst „Google Analytics“,
                            welcher von der Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA)
                            angeboten wird. Der Dienst (Google Analytics) verwendet
                            „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert werden.
                            Die durch die Cookies gesammelten Informationen werden im
                            Regelfall an einen Google-Server in den USA gesandt und dort gespeichert.
                            Google LLC hält das europäische Datenschutzrecht ein und ist unter dem
                            Privacy-Shield-Abkommen zertifiziert: <a href='https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active'>https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a>
                            uf dieser Website greift die IP-Anonymisierung.
                            <br /><br />Die IP-Adresse der Nutzer wird innerhalb der
                            Mitgliedsstaaten der EU und des Europäischen Wirtschaftsraum und in den
                            anderen Vertragsstaaten des Abkommens gekürzt.
                            Nur in Einzelfällen wird die IP-Adresse zunächst ungekürzt in die
                            USA an einen Server von Google übertragen und dort gekürzt.
                            Durch diese Kürzung entfällt der Personenbezug Ihrer IP-Adresse.
                            Die vom Browser übermittelte IP-Adresse des Nutzers wird nicht mit
                            anderen von Google gespeicherten Daten kombiniert.
                            <br /><br />
                            Im Rahmen der Vereinbarung zur Auftragsdatenvereinbarung, welche wir als Websitebetreiber mit der Google Inc.
                            geschlossen haben, erstellt diese mithilfe der gesammelten Informationen eine Auswertung der Websitenutzung und der Websiteaktivität und erbringt mit der Internetnutzung verbundene Dienstleistungen.
                            Die von Google in unserem Auftrag erhobenen Daten werden genutzt,
                            um die Nutzung unseres Online-Angebots durch die einzelnen Nutzer
                            auswerten zu können, z. B. um Reports über die Aktivität auf der
                            Website zu erstellen, um unser Online-Angebot zu verbessern.
                            Sie haben die Möglichkeit, die Speicherung der Cookies auf Ihrem
                            Gerät zu verhindern, indem Sie in Ihrem Browser entsprechende Einstellungen vornehmen.
                            Es ist nicht gewährleistet, dass Sie auf alle Funktionen dieser
                            Website ohne Einschränkungen zugreifen können, wenn Ihr Browser keine Cookies zulässt.
                            Weiterhin können Sie durch ein Browser-Plugin verhindern,
                            dass die durch Cookies gesammelten Informationen (inklusive Ihrer IP-Adresse)
                            an die Google Inc. gesendet und von der Google Inc. genutzt werden. Folgender
                            Link führt Sie zu dem entsprechenden Plugin:<a href='https://tools.google.com/dlpage/gaoptout?hl=de'>https://tools.google.com/dlpage/gaoptout?hl=de</a>
                            <br /><br />
                            Hier finden Sie weitere Informationen zur Datennutzung durch die Google Inc.:

                            <ul className='list-disc'>
                                <li className='text-sm'>
                                    <a href='https://policies.google.com/privacy/partners?hl=de'>https://policies.google.com/privacy/partners?hl=de</a> (Daten, die von Google-Partnern erhoben werden)
                                </li>
                                <li className='text-sm'>
                                    <a href='https://adssettings.google.de/authenticated'>https://adssettings.google.de/authenticated</a> (Einstellungen über Werbung, die Ihnen angezeigt wird)                                </li>
                                <li className='text-sm'>
                                    <a href='https://policies.google.com/technologies/ads?hl=de'>https://policies.google.com/technologies/ads?hl=de</a> (Verwendung von Cookies in Anzeigen)
                                </li>
                            </ul>
                            <br />
                            <br />
                            <H6 color="gray">Rechte des Nutzers</H6>
                            Sie haben als Nutzer das Recht, auf Antrag eine kostenlose Auskunft darüber zu erhalten,
                            welche personenbezogenen Daten über Sie gespeichert wurden.
                            Sie haben außerdem das Recht auf Berichtigung falscher Daten
                            und auf die Verarbeitungseinschränkung oder Löschung Ihrer
                            personenbezogenen Daten. Falls zutreffend,
                            können Sie auch Ihr Recht auf Datenportabilität geltend machen.
                            Sollten Sie annehmen, dass Ihre Daten unrechtmäßig verarbeitet wurden,
                            können Sie eine Beschwerde bei der zuständigen Aufsichtsbehörde einreichen.
                            <br />
                            <br />
                            <H6 color="gray">Löschung von Daten</H6>
                            Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur Aufbewahrung von Daten
                            (z. B. Vorratsdatenspeicherung) kollidiert, haben Sie ein Anrecht auf Löschung
                            Ihrer Daten. Von uns gespeicherte Daten werden, sollten sie für ihre Zweckbestimmung
                            nicht mehr vonnöten sein und es keine gesetzlichen Aufbewahrungsfristen geben,
                            gelöscht. Falls eine Löschung nicht durchgeführt werden kann, da die Daten für
                            zulässige gesetzliche Zwecke erforderlich sind, erfolgt eine Einschränkung
                            der Datenverarbeitung.
                            In diesem Fall werden die Daten gesperrt und nicht für andere Zwecke verarbeitet.
                            <br />
                            <br />
                            <H6 color="gray">Widerspruchsrecht</H6>
                            Nutzer dieser Webseite können von ihrem Widerspruchsrecht Gebrauch machen und der Verarbeitung
                            ihrer personenbezogenen Daten zu jeder Zeit widersprechen.
                            Wenn Sie eine Berichtigung, Sperrung, Löschung oder Auskunft über die zu Ihrer
                            Person gespeicherten personenbezogenen Daten wünschen oder Fragen bzgl.
                            der Erhebung, Verarbeitung oder Verwendung Ihrer personenbezogenen Daten haben
                            oder erteilte Einwilligungen widerrufen möchten, wenden Sie sich bitte an
                            folgende E-Mail-Adresse: datenschutz@mionprotect.de


                        </LeadText>
                    </div>

                    <div className="w-full md:w-5/12 px-6 mx-auto items-center lg:mt-0">
                        <H4 color="gray">IMPRESSUM</H4>

                        Angaben gemäß § 5 TMG
                        <br />
                        Alexander Heizenreider
                        <br />
                        Mion Protect GmbH
                        <br />
                        Sickingenstr. 26
                        10553 Berlin
                        <br />
                        <br />
                        <H6 color="gray">Kontakt</H6>
                        Telefon: 030 - 629 328 20
                        <br />
                        E-Mail: info@mionprotect.de

                        <br />
                        <br />
                        <H6 color="gray">Streitschlichtung</H6>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                        (OS) bereit:
                        <a href='https://ec.europa.eu/consumers/odr'>https://ec.europa.eu/consumers/odr</a>.
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                        vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        <br />
                        <br />
                        <H6 color="gray">Haftung für Inhalte</H6>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                        auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                        konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        <br />
                        <br />
                        <H6 color="gray">Haftung für Links</H6>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                        Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
                        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                        umgehend entfernen.
                        <br />
                        <br />
                        <H6 color="gray">Urheberrecht</H6>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke 
                        auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der 
                        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                        Downloads und Kopien dieser Seite sind nur für den privaten, nicht 
                        kommerziellen Gebrauch gestattet.
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt 
                        wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden 
                        Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden 
                        Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte 
                        umgehend entfernen.

                    </div>
                </div>
                {/* <section className="pb-60 relative block bg-gray-200">
                <div className="container max-w-7xl mx-auto px-4 lg:pt-12">
                    <Title heading="DATENSCHUTZERKLÄRUNG">
                    </Title>
                </div>
                <div className="flex flex-wrap mt-16">
                    <div className="w-full md:w-5/12 px-1 mx-auto">
                        <H6 color="gray">Grundlegendes:</H6>
                        <LeadText color="blueGray">
                            Anbieter und verantwortliche Stelle im Sinne des Datenschutzgesetzes
                            <br/>
                            <span>Mion Protect GmbH</span>
                            <br/>
                            Geschäftsführer: Herr Alexander Heizenreider, 
                            Sikingenstr. 26
                            10553 Berlin
                        </LeadText>
                    </div></div>

            </section> */}
            </section>
        </Page>
    );
}

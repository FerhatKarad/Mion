import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-200">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="UNSERE LEISTUNGEN">
                Deutscher guter Sicherheitsdienst bieten wir eine Vielzahl an Leistungen. 
                Möchten Sie mehr über unsere Tätigkeiten erfahren? 
                Hier erhalten Sie eine Übersicht und einen Einblick in unser Angebot.
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="store_mall_directory" title="OBJEKTSCHUTZ">
                        Für die Sicherheit Ihrer Objekte stellen wir unsere
                        Sicherheits Fachkräfte ganz nach Ihren Vorstellungen zur Verfügung ein.
                    </ContactCard>
                    <ContactCard icon="key" title="SCHLIEßDIENST">
                        Jedem Zutrittsberechtigten einen Schlüssel zu geben, stellt auf Grund der hohen Anzahl
                         an Schlüsseln eine erhöhte Verlustgefahr.
                    </ContactCard>
                    <ContactCard icon="settings_remote" title="BRANDWACHE">
                        Vorbeugender Brandschutz für Ihr Unternehmen.
                        Wir Schützen Mensch und Tier, die Wälder und Felder.
                    </ContactCard>
                    <ContactCard icon="assignment_ind" title="EINLASSKONTROLLEN">
                        Eine Absicherung Ihres Geschäftes ist Ihr Aushängeschild.
                        Weil der erste Eindruck zählt! Führen wir Einlasskontrollen für sie durch.
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}

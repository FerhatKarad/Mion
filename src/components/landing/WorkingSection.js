import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/securityman.jpg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-300 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="star" title="Unsere Stärken">
                        Wir stehen für hohe Qualität, Kooperation, Kommunikation und Loyalität.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="gavel"
                        title="Unser Versprechen"
                    >
                        Zufriedenheit ist unser Auftrag
                        Seriös, souverän, kompetent. Qualität ist entscheidend. Gerade im Bereich der Sicherheit.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="security"
                        title="Unsere Tätigkeiten"
                    >
                        Wir sind Ihr Partner bei allen Arten von Security, sei es bei Objekt- und Wacchschutz, Werkschutz, Brandschutz.
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Wir bieten optimalen Schutz an</H4>
                        <LeadText color="blueGray">
                        In der Hauptstadt Berlin ist es Sicherheit ein besonders wichtiges Thema
                         und eine echte Herausforderung für jedes Sicherheitsunternehmen.
                          Es sind verstärkte Schutzmaßnahmen im privaten als auch im gewerblichen
                           Bereich nötig. Speziell im Hinblick auf die Entwicklung der vergangenen Jahren.
                        </LeadText>
                        <LeadText color="blueGray">
                        Immer häufiger werden daher die Dienste von professionellen
                         Sicherheitsfirmen wie der Mion Protect GmbH in Anspruch genommen
                          um den Schutz von Personen und deren Eigentum sichern.
                          Mion Protect ist der Partner in Berlin für professionelle
                           Sicherheitsfragen und Bedürfnisse.mit erstklassigem Personal.
                        </LeadText>
                    </div>

                    <div className="w-full md:w-5/12 px-6 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Top Qualifizierte Sicherheits Mitarbeiter</H6>
                                <Paragraph color="blueGray">
                                Bei uns kommen nur erfahrene und leistungsstarke Sicherheitsfachleute zum Einsatz. 
                                    Somit bieten wir nur hochqualifizierte Sicherheits Mitarbeiter für unsere Dienstleistungen an.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

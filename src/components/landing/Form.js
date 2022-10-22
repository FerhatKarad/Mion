import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export default function Form() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r1jjlr8', 'template_b8rcqri', form.current, '4-Ns5yySTmb4gD9LR')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Nachricht wurde erfolgreich gesendet!'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, etwas ist schiefgelaufen!',
                    text: error.text
                })
            });
        e.target.reset()
    };


    return (
        <div id='contact' className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">Kontaktieren Sie uns!</H3>
                            <Paragraph color="blueGray">
                                Füllen Sie alle Felder aus, und wir melden uns bei Ihen!
                            </Paragraph>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    placeholder="Nachname, Name"
                                    color="lightBlue"
                                    required
                                />
                                <Input
                                    type="email"
                                    placeholder="Email Addresse"
                                    color="lightBlue"
                                    required
                                />
                            </div>

                            <Textarea color="lightBlue" placeholder="Message" required />

                            <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light">
                                    Nachricht Senden
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

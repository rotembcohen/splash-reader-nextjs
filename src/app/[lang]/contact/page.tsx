import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { createMetadata } from '@/lib/utils';

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const { title, description, keywords } = dictionary.meta.contact;
  
  return createMetadata({
    title,
    description,
    keywords,
    path: 'contact',
    locale,
  });
}

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const contact = dictionary.contact;
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-deep to-brand-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{contact.hero.title}</h1>
            <p className="text-xl text-gray-200 mb-8">{contact.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-deep">{contact.info.title}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">support@splashreader.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-brand-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3846-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Discord</h3>
                    <a 
                      href="https://discord.gg/wkKUTd6vbP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline"
                    >
                      Join our server
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-brand-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Facebook</h3>
                    <a 
                      href="https://www.facebook.com/splashreader" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline"
                    >
                      Follow our page
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-deep">{contact.faq.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{contact.faq.q1}</h3>
                    <p className="text-gray-600">{contact.faq.a1}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{contact.faq.q2}</h3>
                    <p className="text-gray-600">{contact.faq.a2}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{contact.faq.q3}</h3>
                    <p className="text-gray-600">{contact.faq.a3}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-deep">{contact.form.title}</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    {contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="primary-button w-full py-3"
                  >
                    {contact.form.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

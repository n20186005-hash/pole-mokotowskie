import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-12 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4">{t('about')}</h3>
            <p className="text-sm opacity-60 max-w-sm whitespace-pre-wrap">{t('description')}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">{t('official')}</h3>
            <div className="flex flex-col gap-2">
              <a href="https://www.gov.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                波兰共和国外交与签证
              </a>
              <a href="https://www.poland.travel/en/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                波兰国家旅游局
              </a>
              <a href="https://nid.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                波兰国家遗产研究院
              </a>
              <a href="https://zielona.um.warszawa.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                华沙市政府
              </a>
              <a href="https://www.bn.org.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                波兰国家图书馆
              </a>
              <a href="https://www.mazovia.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                马佐夫舍省政府
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm opacity-60">
          <p>{t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}

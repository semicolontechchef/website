import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {t('welcome')}
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 text-center">
            This is the home page. Ready for design implementation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home


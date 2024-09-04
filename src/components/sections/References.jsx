import Section from './Section'
import { benefit1, benefit2, benefit3 } from '@assets/image'

export const References = () => {
  return (
    <div className="my-12 bg-sky-100">
      <Section>
        <div>
          <div className='flex justify-center'>
            <h2 className='text-2xl lg:text-[2rem] font-bold font-kallisto'>Découvrez Comment Notre Site Web Peut Transformer Votre Business !</h2>
          </div>
          <div className='grid grid-cols-3 gap-4 pt-12 sm:grid-cols-6'>
              {/* Card des bénéfit*/}
            <div className='flex flex-col col-span-3 sm:col-span-2'>
              <div className='flex justify-center'>
                <div className='w-28 lg:w-36'>
                  <img src={benefit1} alt="" />
                </div>
              </div>
              <p className='pt-6 text-sm text-center font-nunito-sans'>
                Attirez un afflux de visiteurs qualifiés grâce à une optimisation ciblée de votre site.
              </p>
            </div>
            <div className='flex flex-col col-span-3 sm:col-span-2'>
              <div className='flex justify-center'>
                <div className='w-28 lg:w-36 '>
                  <img src={benefit2} alt="" />
                </div>
              </div>
              <p className='pt-6 text-sm text-center font-nunito-sans'>
                Convertissez les visiteurs en clients loyaux avec un design axé sur la performance.
              </p>
            </div>
            <div className='flex flex-col col-span-3 sm:col-span-2'>
              <div className='flex justify-center'>
                <div className='w-28 lg:w-36'>
                  <img src={benefit3} alt="" />
                </div>
              </div>
              <p className='pt-6 text-sm text-center font-nunito-sans'>
                Maximisez vos profits avec des résultats mesurables et exceptionnels.
              </p>
            </div>
          </div>
        </div>
      </Section>

    </div>
    
  )
}

export default References
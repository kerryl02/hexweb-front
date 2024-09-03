import Section from './Section'
import { benefit1, benefit2, benefit3 } from '@assets/image'

export const References = () => {
  return (
    <div className="bg-sky-100">
      <Section>
        <div>
          <div className='flex justify-center'>
            <h2 className='text-[2rem] font-bold'>Découvrez Comment Notre Site Web Peut Transformer Votre Business !</h2>
          </div>
          <div className='flex justify-between py-12'>
              {/* Card des bénéfit*/}
            <div className='w-80'>
              <div className='flex justify-center'>
                <img src={benefit1} width={150} height={150} alt="" />
              </div>
              <p>
                Attirez un afflux de visiteurs qualifiés grâce à une optimisation ciblée de votre site.
              </p>
            </div>
            <div className='w-80'>
              <div className='flex justify-center'>
                <img src={benefit2} width={150} height={150} alt="" />
              </div>
              <p>
                Convertissez les visiteurs en clients loyaux avec un design axé sur la performance.
              </p>
            </div>
            <div className='w-80'>
              <div className='flex justify-center'>
                <img src={benefit3} width={150} height={150} alt="" />
              </div>
              <p>
                Maximisez vos profits avec des résultats mesurables et un retour sur investissement exceptionnel.
              </p>
            </div>
          </div>
        </div>
      </Section>

    </div>
    
  )
}

export default References
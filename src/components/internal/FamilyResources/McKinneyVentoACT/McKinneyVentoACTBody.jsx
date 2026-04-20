import './McKinneyVentoACTBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function McKinneyVentoACTBody() {
    const { t } = useTranslation('familyResources');

    const list = t('mcKinneyVentoAct.list', { returnObjects: true }) || [];

    return (
        <div className="mva-container">

            <div className="mva-page-title">
                <h1>{t('mcKinneyVentoAct.title')}</h1>
            </div>

            <FadeIn>
                <div className="mva-content">

                    <h2>{t('mcKinneyVentoAct.schoolName')}</h2>
                    <h3>{t('mcKinneyVentoAct.policyCode')}</h3>
                    <h3>{t('mcKinneyVentoAct.policyTitle')}</h3>
                    <br />
                    <h3>{t('mcKinneyVentoAct.sectionTitle')}</h3>
                    <br />
                    <p>{t('mcKinneyVentoAct.introP1')}</p>
                    <br />
                    <p>{t('mcKinneyVentoAct.introP2')}</p>
                    <br />
                    <ul>
                        {Array.isArray(list) &&
                            list.map((item, i) => <li key={i}>{item}</li>)
                        }
                    </ul>
                    <br /> 
                    <p>{t('mcKinneyVentoAct.definition')}</p>
                    <br /> 
                    <h3>{t('mcKinneyVentoAct.sectionA')}</h3>
                    <br /> 
                    <p>{t('mcKinneyVentoAct.enrollmentP1')}</p>
                    <br /> 
                    <p>{t('mcKinneyVentoAct.enrollmentP2')}</p>
                    <br /> 
                    <p>{t('mcKinneyVentoAct.enrollmentP3')}</p>
                    <br /> 
                    <p>{t('mcKinneyVentoAct.enrollmentP4')}</p>

                </div>
            </FadeIn>

            <CenteredLogo />
        </div>
    );
}

export default McKinneyVentoACTBody;
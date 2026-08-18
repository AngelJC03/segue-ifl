// import { React } from 'react';
import './AdmissionsAndLotteryBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function AdmissionsAndLotteryBody() {
    const { t } = useTranslation('enroll');
    const howToApplyItems = t('admissionsAndLottery.howToApplyItems');

    return (
        <div className="admissions-and-lottery-container">
            <div className="admissions-and-lottery-page-title">
                <h1>{t('admissionsAndLottery.title')}</h1>
            </div>
            <FadeIn>
                <div className="admissions-and-lottery-content">

                    <h2><strong>{t('admissionsAndLottery.howToApply')}</strong></h2>
                    <p>{t('admissionsAndLottery.howToApplyIntro')}</p>
                    <ul className="admissions-list">
                        {howToApplyItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('admissionsAndLottery.howToApplyOutro')}</p>
                    <p>🗓️ <strong>{t('admissionsAndLottery.deadline')}</strong></p>

                    <br />

                    <h2><strong>{t('admissionsAndLottery.lotteryProcess')}</strong></h2>
                    <p>{t('admissionsAndLottery.lotteryProcessBody')}</p>
                    <ul className="admissions-list">
                        <li><strong>Date:</strong> <strong>March 1st</strong> (or the next business day if on a weekend/holiday)</li>
                        <li><strong>Location:</strong> Davis REACH Academy, 325 Cowden Street</li>
                        <li><strong>Format:</strong> Public event—families may attend but are not required to be present</li>
                    </ul>
                    <p>
                        Parents/guardians will be notified via phone, postcard, and/or social media.
                        Results determine admission offers and waitlist status.
                    </p>

                    <h2><strong>Lottery Exemptions</strong></h2>
                    <ul className="admissions-list">
                        <li>
                            <strong>Siblings of Current Students:</strong> Siblings (as defined by shared legal guardian or parent)
                            may be exempt from the lottery and admitted directly. Documentation is required, including photo ID
                            and a birth certificate or guardianship papers.
                        </li>
                        <li>
                            <strong>Children of Davis REACH Academy Staff:</strong> Children of full-time staff may also be admitted directly,
                            provided they do not exceed 10% of the school’s total enrollment. If more apply than there are spaces,
                            a separate pre-lottery will be conducted for staff children.
                        </li>
                    </ul>

                    <h2><strong>{t('admissionsAndLottery.waitlistTitle')}</strong></h2>
                    <p>
                        Students not offered a seat during the lottery will be placed on a ranked waitlist. As openings occur,
                        families will be contacted in the order determined by the lottery.
                    </p>
                    <p>
                        If no waitlist exists for a particular grade level and a qualified applicant arrives after the school year
                        begins, Davis REACH Academy may admit them directly if they meet residency and age requirements.
                    </p>

                    <h2><strong>{t('admissionsAndLottery.confirmingTitle')}</strong></h2>
                    <p>
                        Accepted families must confirm their intent to enroll within 15 days of notification by submitting a full Enrollment Packet.
                        If a family does not respond in time, the seat will be offered to the next applicant on the waitlist.
                    </p>
                    <p>The enrollment packet includes:</p>
                    <ul className="admissions-list">
                        <li>Proof of identity</li>
                        <li>Prior school academic records</li>
                        <li>Special education documentation (IEP or 504, if applicable)</li>
                    </ul>
                    <p>
                        ⏳ Packets submitted after the 15-day deadline will not be accepted, and the applicant will be placed at the bottom of the waitlist.
                    </p>

                    <h2><strong>{t('admissionsAndLottery.contactTitle')}</strong></h2>
                    <p>
                        Davis REACH Academy<br />
                        Cowden Street Collaborative, Inc.<br />
                        📞 (401) 721-0964 Ext. 104<br />
                        📱 (401) 481-3378<br />
                        📧 <a href="mailto:Angelo.Garcia@segueifl.org">{t('admissionsAndLottery.emailLink')}</a>
                    </p>

                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default AdmissionsAndLotteryBody;

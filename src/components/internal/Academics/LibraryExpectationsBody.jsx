import './LibraryExpectationsBody.css';
import FadeIn from '../../fadeinsection/FadeIn';
import CenteredLogo from '../../CenteredLogo';

function LibraryExpectationsBody() {
    return (
        <div className="library-expectations-container">
            <div className="library-expectations-page-title">
                <h1> Library Expectations </h1>
            </div>
            <FadeIn>
                <div className="library-expectations-content">
                    <ul className="expectation-list">
                        <li>
                            ★ Treat furniture, books, and library materials with care.
                            <ul>
                                <li>SIT on chairs/stools/benches. Do not stand, lay, or jump on any furniture.</li>
                                <li>Be GENTLE with books. They are fragile!</li>
                                <li>Do NOT write, draw, or mark any furniture in the library.</li>
                            </ul>
                        </li>
                        <li>
                            ★ If you take a book off the shelf, return it to the BOOK DROP located at the circulation desk.
                            <ul>
                                <li>NEVER put a book back on the shelf! This disrupts the organization of the library, and may mean you cannot find the book again.</li>
                            </ul>
                        </li>
                        <li>
                            ★ NO food or drinks are allowed in the library.
                            <ul>
                                <li>Water is OK in closed containers.</li>
                            </ul>
                        </li>
                        <li>
                            ★ Use only a quiet voice and have a calm body while in the library.
                            <ul>
                                <li>Whispers ONLY</li>
                                <li>Do NOT jump or stand on furniture</li>
                                <li>Walking feet</li>
                            </ul>
                        </li>
                        <li>
                            ★ Stay in scholar spaces
                            <ul>
                                <li>Scholars can read, work, or relax at the maker tables in the center of the room, or on either side of the circulation desk by the bookshelves.</li>
                                <li>Scholars are NOT allowed in the staff area, staff bathroom, or behind the circulation desk.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LibraryExpectationsBody;

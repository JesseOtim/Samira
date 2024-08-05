
import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1>♩ AudioSAM🔊</h1>
            <button
                onClick={() => {
                    setLibraryStatus(!libraryStatus);
                }}
            >
                <h4>Collection</h4>
            </button>
        </nav>
    );
};

export default Nav;

import AppDeploy from "./AppDeploy";
import AppPoolRefresh from "./AppPoolRefresh";
import React from "react";

const DevAssistant = () => {

    // Use a single state variable for selected option
    const [selected, setSelected] = React.useState('appPoolRefresh');
    const [consoleOutput, setconsoleOutput] = React.useState('lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');


    // Define options outside component to avoid recreation on each render
    const options = [
        {
            id: 'appDeploy',
            label: 'App Deploy'
        },
        {
            id: 'appPoolRefresh',
            label: 'App Pool Refresh'
        }
    ];

    return (
        <>
            <div className="dev-assistant-header-flex">
                <div className="w30">
                    <section className="dev-assistant-options-container">
                        {options.map(option => (
                            <header
                                key={option.id}
                                className={`dev-assistant-options-item ${selected === option.id ? 'active-option' : ''}`}
                                onClick={() => setSelected(option.id)}
                            >
                                {option.label}
                            </header>
                        ))}
                    </section>

                    {selected === 'appDeploy' ? (
                        <AppDeploy />
                    ) : (
                        <AppPoolRefresh />
                    )}
                </div>
                <div  className="console">{consoleOutput}</div>
            </div>

        </>
    );
}

export default DevAssistant;

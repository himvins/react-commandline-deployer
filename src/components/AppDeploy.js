import Select from 'react-select';
import { useState } from 'react';


const AppDeploy = () => {

    const [selectedAppNameApp, setSelectedAppNameApp] = useState('');
    const [selectedDeploymentOption, setSelectedDeploymentOption] = useState('deploy-by-build');
    const [selectedSourceEnvironment, setSelectedSourceEnvironment] = useState('');
    const [targetEnvironments, setTargetEnvironments] = useState([]);
    const [consoleOutput, setConsoleOutput] = useState('');


    const appOptions = [
        { value: 'app1', label: 'App 1' },
        { value: 'app2', label: 'App 2' },
        { value: 'app3', label: 'App 3' }
    ];

    const deploymentOptions = [
        { value: 'deploy-by-build', label: 'Deploy by Build Number' },
        { value: 'deploy-by-environment', label: 'Deploy by Environment' },
    ];


    const handleDeployOptionChange = (event) => {

        // Handle deploy option change
    };
    return (<>
        <div className="app-deploy-container">
            <Select
                placeholder="Select an app to deploy"
                options={appOptions}
            />
            <Select
                onChange={(e) => setSelectedDeploymentOption(e.value)}
                options={deploymentOptions}
                value={{ label: deploymentOptions.find(option => option.value === selectedDeploymentOption).label }}
            />
            {selectedDeploymentOption === 'deploy-by-build' ? (
                <input className='custom-input' type="text" placeholder="Build Number (e.g., 2023.09.30-1)" />
            ) : (
                <Select
                    placeholder="Select Source Environment"
                    onChange={(e) => setSelectedSourceEnvironment(e.target.value)} value={selectedSourceEnvironment}>
                    {/* Populate options dynamically */}
                </Select>
            )}


            <Select
                placeholder="Select Target Environments:"
                isMulti
                onChange={(e) => setTargetEnvironments(Array.from(e.target.selectedOptions, option => option.value))} value={targetEnvironments}>
                {/* Populate options dynamically */}
            </Select>

            <button className="app-deploy-button">Deploy</button>



        </div>
    </>);
}

export default AppDeploy;
import Select from 'react-select';
import { useState } from 'react';

const AppPoolRefresh = () => {
    const [selectedAppNameApp, setSelectedAppNameApp] = useState('');
    const [targetEnvironments, setTargetEnvironments] = useState([]);


    const appOptions = [
        { value: 'app1', label: 'App 1' },
        { value: 'app2', label: 'App 2' },
        { value: 'app3', label: 'App 3' }
    ];

    return (<>
        <div className="app-deploy-container">
            <Select
                placeholder="Select Apps to Pool Refresh"
                isMulti
                options={appOptions}
            />

            <Select
                placeholder="Select Target Environments:"
                isMulti
                onChange={(e) => setTargetEnvironments(Array.from(e.target.selectedOptions, option => option.value))} value={targetEnvironments}>
                {/* Populate options dynamically */}
            </Select>

            <button className="app-deploy-button">App Pool Refresh</button>

        </div>

    </>);
}

export default AppPoolRefresh;
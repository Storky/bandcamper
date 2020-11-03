import React from 'react';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const TabsEngine = ({ tabsDataArray }) => {

    const [activeTab, setTab] = React.useState(+localStorage.getItem("storedActiveTab") || 0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
        localStorage.setItem("storedActiveTab", newValue)
    };

    function getTabPanel(title, content, index) {
        return (<div
            key={title}
            hidden={activeTab !== index}
        >
            {activeTab === index && content}
        </div>)
    }

    return (
        <React.Fragment>
            <AppBar position="static">
                <Tabs value={activeTab} onChange={handleChange}>
                    {tabsDataArray.map((item, arrIndex) => (<Tab
                        value={arrIndex}
                        key={item.title}
                        label={item.title}
                        wrapped={item.title && item.title.length > 20}
                    />))}
                </Tabs>
            </AppBar>

            {tabsDataArray.map((item, arrIndex) => getTabPanel(item.title, item.content, arrIndex))}

        </React.Fragment>
    );
};

TabsEngine.propTypes = {
    tabsDataArray: PropTypes.array.isRequired,
};


export default TabsEngine;

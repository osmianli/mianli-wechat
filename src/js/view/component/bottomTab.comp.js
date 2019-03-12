import React, { Component } from "react";
import { TabBar } from 'antd-mobile';
import PropTypes from "prop-types";

class BottomTab extends Component {
  constructor(props) {
    super(props);

    const {history, location} = this.props;
    this.history = history || {};
    this.location = location || {};
    this.state = {
      selectedTab: 'enroll-list',
      hidden: false,
      fullScreen: false,
    };
  }

  _tabBarList = [
    {
      key: "enroll-list",
      labelName: "学校",
      iconName: "icon-gb-icon-enroll-list",
      activeIconName: "icon-gb-icon-enroll-list-active",
      urlRedirect: "/enroll/list"
    },
    {
      key: "course-list",
      labelName: "已购",
      iconName: "icon-gb-icon-study",
      activeIconName: "icon-gb-icon-study-active",
      urlRedirect: "/course/list"
    },
    {
      key: "classmate",
      labelName: "同学",
      iconName: "icon-gb-icon-me",
      activeIconName: "icon-gb-icon-me-active",
      urlRedirect: "/me/index"
    },
    {
      key: "me",
      labelName: "我的",
      iconName: "icon-gb-icon-me",
      activeIconName: "icon-gb-icon-me-active",
      urlRedirect: "/me/index"
    }
  ];

  render() {
    const {history} = this.props;
    return (
      <div className="bottom-bar" style={{width:'100%', position:'fixed', bottom:"0"}}>
        <TabBar
        	tabBarPosition="bottom"
			    prerenderingSiblingsNumber={0}
        	>
            {
              this._tabBarList && this._tabBarList.map(
                (tabBar) => {
                  return <TabBar.Item
                    key={tabBar.key}
                        icon={
    			              <div style={{
    			                width: '22px',
    			                height: '22px',
    			                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
    			              />
    			            }
			             selectedIcon={
    			              <div style={{
    			                width: '22px',
    			                height: '22px',
    			                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
    			              />
    			            }
                          onPress = {()=>{
                              this.setState({
                                selectedTab: tabBar.key,
                              });
                              this.history.push(tabBar.urlRedirect);
                            }
                          }
			               selected={this.state.selectedTab === tabBar.key}
                    title={tabBar.labelName}>
                  	</TabBar.Item>;
                }
              )
            }
      	</TabBar>
      </div>
    );
  }
}

BottomTab.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};

export default BottomTab;

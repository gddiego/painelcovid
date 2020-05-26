import React, { useState, useEffect, PureComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Badge, Card, Tag, Layout, Menu, Breadcrumb, PageHeader, Button, Descriptions, Timeline } from 'antd';

import { UserOutlined, LaptopOutlined, SyncOutlined, CloseCircleOutlined, ExclamationCircleOutlined, ClockCircleOutlined, MinusCircleOutlined, NotificationOutlined } from '@ant-design/icons';
import './styles.css';

import api from '../../services/api';
import { FormattedNumber } from 'react-intl';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class ListCovid extends React.Component {
    state = {
        countrydata: []
    }

    componentDidMount() {
        api.get()
            .then(res => {
                const countrydata = res.data;
                this.setState(countrydata);
            }, [])
    }

    render() {
        return (
            <Layout>
                <Header className="header">

                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="3">Painel Covid-19 Demo</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Detalhes">
                                <Menu.Item key="5">Atualizações</Menu.Item>
                                <Menu.Item key="6">Busca por regioes</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item
                             
                            
                            >
                                <PageHeader
                                title="Covid-19 Brasil"
                             className="site-page-header"
                             subTitle="Acompanhe as atualizações do coronavirus no Brasil"
                             tags={<Tag color="blue">Bem vindo</Tag>}
                             ></PageHeader>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.state.countrydata.map(
                                person =>
                                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background: '#fff' }}>

                                        <div className="site-page-header-ghost-wrapper">
                                            <Timeline mode="center">
                                                <Timeline.Item>Criado por Diego Mendes</Timeline.Item>
                                                <Timeline.Item>Desenvolvedor PHP, Reactjs, React Native, Nodejs</Timeline.Item>
                                            </Timeline>
                                            <PageHeader
                                                ghost={false}
                                                //   onBack={() => window.history.back()}
                                                title=''
                                                subTitle={[
                                                    <Badge style={{ marginRight: 16 }} count={0} dot>
                                                        <NotificationOutlined />
                                                    </Badge>,
                                                    <Badge>
                                                        <a class="link"> Status coronavirus</a>
                                                    </Badge>
                                                ]}
                                                extra={[
                                                    <Button key="1" type="primary">
                                                        {person.info.code}
                                                    </Button>,
                                                    <Button key="1" type="primary">
                                                        {person.info.title}
                                                    </Button>,
                                                ]}
                                            >
                                                <Descriptions size="small" column={3}>
                                                    <Descriptions.Item label="Classificação de perigo total">
                                                        <Tag color="error">
                                                            {person.total_danger_rank}
                                                        </Tag>
                                                    </Descriptions.Item>
                                                    <Descriptions.Item label="Total de Casos">
                                                        <Tag color="warning">
                                                            {Intl.NumberFormat('pt-BR').format(person.total_cases)}
                                                        </Tag>
                                                    </Descriptions.Item>
                                                    <Descriptions.Item label="Total de mortes" >
                                                        <Tag color="error">
                                                            {Intl.NumberFormat('pt-BR').format(person.total_deaths)}
                                                        </Tag>
                                                    </Descriptions.Item>
                                                    <Descriptions.Item label="Total de Casos serios">
                                                        <Tag icon={<ExclamationCircleOutlined />} color="warning">
                                                            {Intl.NumberFormat('pt-BR').format(person.total_serious_cases)}
                                                        </Tag>
                                                    </Descriptions.Item>
                                                    <Descriptions.Item label="Total de Casos recuperados">
                                                        <Tag color="success">
                                                            {Intl.NumberFormat('pt-BR').format(person.total_recovered)}
                                                        </Tag>
                                                    </Descriptions.Item>
                                                    <Descriptions.Item label="Total de casos por dia">
                                                        <Tag icon={<ClockCircleOutlined />} color="default">
                                                            {Intl.NumberFormat('pt-BR').format(person.total_new_cases_today)}
                                                        </Tag>
                                                    </Descriptions.Item>
                                                    <Descriptions.Item label="Total de novas mortes">
                                                        <Tag icon={<CloseCircleOutlined />} color="error">
                                                            {Intl.NumberFormat('pt-BR').format(person.total_new_deaths_today)}
                                                        </Tag>
                                                    </Descriptions.Item>
                                                    <Descriptions.Item label="Total de ativos">
                                                        <Tag color="error">
                                                            {Intl.NumberFormat('pt-BR').format(person.total_active_cases)}
                                                        </Tag>
                                                    </Descriptions.Item>
                                                </Descriptions>
                                            </PageHeader>

                                        </div>

                                    </div>

                            )
                            }

                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
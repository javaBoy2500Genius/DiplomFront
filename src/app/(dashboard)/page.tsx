import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ProgressBar,
} from 'react-bootstrap'
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import UserChart from '@/components/Dashboard/UserChart'
import IncomeChart from '@/components/Dashboard/IncomeChart'
import ConversionChart from '@/components/Dashboard/ConversionChart'
import SessionChart from '@/components/Dashboard/SessionChart'
import TrafficChart from '@/components/Dashboard/TrafficChart'

export default function Page() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <Card bg="primary" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  26K
                  <span className="fs-6 ms-2 fw-normal">
                    (-12.4%
                    <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                    )
                  </span>
                </div>
                <div>Заблокированные пользователи</div>
              </div>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-white shadow-none p-0"
                  id="dropdown-chart1"
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem href="#/action-1">Action</DropdownItem>
                  <DropdownItem href="#/action-2">Another action</DropdownItem>
                  <DropdownItem href="#/action-3">Something else</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <UserChart />
            </div>
          </Card>
        </div>

       
        <div className="col-sm-6 col-lg-3">
          <Card bg="warning" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  2.49%
                  <span className="fs-6 ms-2 fw-normal">
                    (84.7%
                    <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                    )
                  </span>
                </div>
                <div>Зарегистрированные пользователи</div>
              </div>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-white shadow-none p-0"
                  id="dropdown-chart3"
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem href="#/action-1">Action</DropdownItem>
                  <DropdownItem href="#/action-2">Another action</DropdownItem>
                  <DropdownItem href="#/action-3">Something else</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <ConversionChart />
            </div>
          </Card>
        </div>

       
      </div>

      <Card className="mb-4">
        <CardBody>
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="mb-0">Трафик</h4>
            
            </div>
         
          </div>
          <div
            style={{
              height: '300px',
              marginTop: '40px',
            }}
          >
            <TrafficChart />
          </div>
        </CardBody>
        <CardFooter>
          <div className="row row-cols-1 row-cols-md-5 text-center">
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50">Попытки DDOS</div>
              <div className="fw-semibold">29.703 пользователей  (40%)</div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="success"
                now={40}
              />
            </div>
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50">Разблокированно пользователей</div>
              <div className="fw-semibold">24.093 пользователей (20%)</div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="info"
                now={20}
              />
            </div>
         
            <div className="col mb-sm-2 mb-0 ">
              <div className="text-black-50">Заблокированно пользователей </div>
              <div className="fw-semibold">22.123 пользователей (80%)</div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="danger"
                now={80}
              />
            </div>
           
          </div>
        </CardFooter>
      </Card>


      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader className='text-center'>
              Доска почета
            </CardHeader>
            <CardBody>
            

              <br />

              <div className="table-responsive">
                <table className="table border mb-0">
                  <thead className="table-light fw-semibold">
                    <tr className="align-middle">
                      <th className="text-center" aria-label="icon">
                        <FontAwesomeIcon icon={faUsers} fixedWidth />
                      </th>
                      <th>Пользователь</th>
              
                     
                      <th>Активность DDOS</th>
                      <th aria-label="Action" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            fill
                            sizes="40px"
                            className="rounded-circle"
                            src="/assets/img/avatars/1.jpg"
                            alt="user@email.com"
                          />
                          <span
                            className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                          />
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-black-50">
                          <span>New</span>
                          {' '}
                          | Registered: Jan 1, 2020
                        </div>
                      </td>
                  
                     
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">10 sec ago</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <DropdownToggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user1"
                          >
                            <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                          </DropdownToggle>

                          <DropdownMenu>
                             
                          
                            <DropdownItem
                              className="text-danger"
                              href="#/action-3"
                            >
                               Удалить
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            fill
                            sizes="40px"
                            className="rounded-circle"
                            src="/assets/img/avatars/2.jpg"
                            alt="user@email.com"
                          />
                          <span
                            className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                          />
                        </div>
                      </td>
                      <td>
                        <div>Avram Tarasios</div>
                        <div className="small text-black-50">
                          <span>Recurring</span>
                          {' '}
                          | Registered: Jan 1, 2020
                        </div>
                      </td>
              
                     
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">5 minutes ago</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <DropdownToggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user2"
                          >
                            <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                          </DropdownToggle>

                          <DropdownMenu>
                             
                          
                            <DropdownItem
                              className="text-danger"
                              href="#/action-3"
                            >
                               Удалить
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            fill
                            sizes="40px"
                            className="rounded-circle"
                            src="/assets/img/avatars/3.jpg"
                            alt="user@email.com"
                          />
                          <span
                            className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white"
                          />
                        </div>
                      </td>
                      <td>
                        <div>Quintin Ed</div>
                        <div className="small text-black-50">
                          <span>New</span>
                          {' '}
                          | Registered: Jan 1, 2020
                        </div>
                      </td>
                    
                     
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">1 hour ago</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <DropdownToggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user3"
                          >
                            <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                          </DropdownToggle>

                          <DropdownMenu>
                             
                          
                            <DropdownItem
                              className="text-danger"
                              href="#/action-3"
                            >
                               Удалить
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            fill
                            sizes="40px"
                            className="rounded-circle"
                            src="/assets/img/avatars/4.jpg"
                            alt="user@email.com"
                          />
                          <span
                            className="avatar-status position-absolute d-block bottom-0 end-0 bg-secondary rounded-circle border border-white"
                          />
                        </div>
                      </td>
                      <td>
                        <div>Enéas Kwadwo</div>
                        <div className="small text-black-50">
                          <span>New</span>
                          {' '}
                          | Registered: Jan 1, 2020
                        </div>
                      </td>
                      
                     
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">Last month</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <DropdownToggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user4"
                          >
                            <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                          </DropdownToggle>

                          <DropdownMenu>
                             
                          
                            <DropdownItem
                              className="text-danger"
                              href="#/action-3"
                            >
                               Удалить
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            fill
                            sizes="40px"
                            className="rounded-circle"
                            src="/assets/img/avatars/5.jpg"
                            alt="user@email.com"
                          />
                          <span
                            className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                          />
                        </div>
                      </td>
                      <td>
                        <div>Agapetus Tadeáš</div>
                        <div className="small text-black-50">
                          <span>New</span>
                          {' '}
                          | Registered: Jan 1, 2020
                        </div>
                      </td>
                   
                     
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">Last week</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <DropdownToggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user5"
                          >
                            <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                          </DropdownToggle>

                          <DropdownMenu>
                             
                          
                            <DropdownItem
                              className="text-danger"
                              href="#/action-3"
                            >
                               Удалить
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="align-middle">
                      <td className="text-center">
                        <div className="avatar avatar-md d-inline-flex position-relative">
                          <Image
                            fill
                            sizes="40px"
                            className="rounded-circle"
                            src="/assets/img/avatars/6.jpg"
                            alt="user@email.com"
                          />
                          <span
                            className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                          />
                        </div>
                      </td>
                      <td>
                        <div>Friderik Dávid</div>
                        <div className="small text-black-50">
                          <span>New</span>
                          {' '}
                          | Registered: Jan 1, 2020
                        </div>
                      </td>
                 
                     
                      <td>
                        <div className="small text-black-50">Last login</div>
                        <div className="fw-semibold">Yesterday</div>
                      </td>
                      <td>
                        <Dropdown align="end">
                          <DropdownToggle
                            as="button"
                            bsPrefix="btn"
                            className="btn-link rounded-0 text-black-50 shadow-none p-0"
                            id="action-user6"
                          >
                            <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                          </DropdownToggle>

                          <DropdownMenu>
                             
                          
                            <DropdownItem
                              className="text-danger"
                              href="#/action-3"
                            >
                               Удалить
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

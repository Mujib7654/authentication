import React, { useEffect } from 'react';
import profile from '../images/profile.jpg';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const About = () => {
  const navigate = useNavigate();

  const callAboutPage = async() => {
    try {
      const res = await fetch('http://localhost:5000/about', {
        method : 'GET',
        headers : {
          Accept : 'application/json',
          'Content-Type' : 'application/json'
        },
        credentials : 'include'
      });

      const data = await res.json();
      console.log(data);

      if(res.status != 200){
        const error = new error(res.error);
        throw error;
      };
    } catch (error) {
      console.log(error);
      navigate('/login')
    };
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div className='container emp-profile'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img src={profile} alt='profile' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Mujibullah Inami</h5>
                <h6>Full Stack developer</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKING: <span>1/10</span>
                </p>

                {/* tabs */}

                <ul className='nav nav-tabs' role='tablist'>
                  {/* <li className='nav-item'>
                    <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab'>
                      About
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' id='profile-tab' data-toggle='tab' href='#profile' role='tab'>
                      Timeline
                    </a>
                  </li> */}
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                        Timeline
                      </a>
                    
                    </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <input type='submit' value='Edit Profile' name='btnAddMore' className='profile-edit-btn' />
            </div>
          </div>

          <div className='row'>
            {/* left side url */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>WORK LINK</p>
                <a href='https://github.com/Mujib7654' target='_blank' rel="noopener noreferrer" >GITHUB</a> <br/>
                <a href='https://github.com/Mujib7654' target='_blank' rel="noopener noreferrer" >INSTAGRAM</a> <br/>
                <a href='https://github.com/Mujib7654' target='_blank' rel="noopener noreferrer" >FACEBOOK</a> <br/>
                <a href='https://github.com/Mujib7654' target='_blank' rel="noopener noreferrer" >LINKEDIN</a> <br/>
                <a href='https://github.com/Mujib7654' target='_blank' rel="noopener noreferrer" >TWITTER</a> <br/>
                <a href='https://github.com/Mujib7654?tab=repositories' target='_blank' rel="noopener noreferrer">PROJECTS</a> <br/>
              </div>
            </div>

            {/* right side tab */}
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  
                  <div className='row'>
                    <div className='col-md-6'>
                      <p>USER ID</p>
                    </div>
                    <div className='col-md-6'>
                      <p>5476868798608075450</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>NAME</p>
                    </div>
                    <div className='col-md-6'>
                      <p>Mujibullah Inami</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>EMAIL</p>
                    </div>
                    <div className='col-md-6'>
                      <p>mujibullahinami26@gmail.com</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>PHONE</p>
                    </div>
                    <div className='col-md-6'>
                      <p>7654515311</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>Profession</p>
                    </div>
                    <div className='col-md-6'>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>

                {/* timeline */}
                <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <p>EXPERIENCE</p>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>HOURLY RATE</p>
                    </div>
                    <div className='col-md-6'>
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>TOTAL PROJECTS</p>
                    </div>
                    <div className='col-md-6'>
                      <p>110</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>ENGLISH LEVEL</p>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>AVAILABILITY</p>
                    </div>
                    <div className='col-md-6'>
                      <p>6 Months</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
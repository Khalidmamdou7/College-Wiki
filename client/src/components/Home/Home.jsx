import React from 'react'
import './home.scss'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
function Home() {
    const history = useHistory();
    function chooseCourse(course) {
        history.push('/course/'+course.code)
    }
    return (
        <div className="home">
            <div className="mainImage">
                <img src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.6435-9/121102831_107944787751696_5431430813709774713_n.png?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEnQmFRW8r05CY1LZigTAUqqLiH5tfaH_OouIfm19of84NKJoUrvIJ7qy24EX4Pi0YBm9Bnjj4ztIiZkqby9pvt&_nc_ohc=l8GDgd7LL_4AX_usykR&_nc_ht=scontent-mrs2-2.xx&oh=7c6906fd8642f305cf84daf0d0e70cc6&oe=617DAE08" alt="a" >
                </img>
            </div>
            <div className="all">
                <div className="content">
                    <h1>CAN WE HELP YOU ?</h1>
                    <SearchBar callback={chooseCourse}/>
                </div>
                <div className="options">
                    <Link to="/departments">
                        <div className="item">
                            <svg  id="Capa_1" x="0px" y="0px" height="60" viewBox="0 0 512 512">
                            <g>
                                <g>
                                    <path d="M460.8,200.748V51.2c-0.015-14.132-11.468-25.585-25.6-25.6h-8.533c-0.015-14.132-11.468-25.585-25.6-25.6H256    c-9.841,0.032-19.182,4.337-25.6,11.796C223.982,4.337,214.641,0.032,204.8,0H59.733c-14.132,0.015-25.585,11.468-25.6,25.6H25.6    C11.468,25.615,0.015,37.068,0,51.2v315.733c0.015,14.132,11.468,25.585,25.6,25.6h281.6V435.2    c0.049,42.395,34.405,76.751,76.8,76.8h51.2c42.395-0.049,76.751-34.405,76.8-76.8V273.067    C511.943,240.559,491.442,211.602,460.8,200.748z M426.667,42.667h8.533c4.71,0.006,8.527,3.823,8.533,8.533v145.57    c-2.833-0.326-5.682-0.494-8.533-0.503h-8.533V42.667z M85.333,17.067h51.2v112.208l-18.938-23.671    c-1.618-2.025-4.07-3.204-6.662-3.204c-2.592,0-5.044,1.179-6.662,3.204l-18.938,23.671V17.067z M51.2,25.6    c0.006-4.71,3.823-8.527,8.533-8.533h8.533V153.6c-0.002,3.625,2.287,6.854,5.708,8.054c3.42,1.2,7.225,0.107,9.488-2.725    l27.471-34.337l27.471,34.337c1.618,2.026,4.07,3.205,6.662,3.204c2.264,0.002,4.435-0.897,6.036-2.497    c1.601-1.601,2.499-3.772,2.497-6.036V17.067h51.2c9.422,0.009,17.057,7.645,17.067,17.067v278.34    c-5.344-3.407-11.542-5.235-17.879-5.274H51.2V25.6z M51.2,324.267h152.788c9.391,0.329,17.019,7.693,17.678,17.067H51.2V324.267z     M307.2,375.467H25.6c-4.71-0.006-8.527-3.823-8.533-8.533V51.2c0.006-4.71,3.823-8.527,8.533-8.533h8.533v307.2    c0,4.713,3.82,8.533,8.533,8.533H307.2V375.467z M307.2,341.333h-68.066c0.671-9.384,8.317-16.748,17.72-17.067H307.2V341.333z     M307.2,307.2h-50.346c-6.352,0.038-12.565,1.871-17.921,5.286V34.133c0.009-9.422,7.645-17.057,17.067-17.067h145.067    c4.71,0.006,8.527,3.823,8.533,8.533v170.667H384c-42.395,0.049-76.751,34.405-76.8,76.8V307.2z M401.067,213.333v110.933h-76.8    v-51.2c0.037-32.974,26.759-59.696,59.733-59.733H401.067z M494.933,435.2c-0.037,32.974-26.759,59.696-59.733,59.733H384    c-32.974-0.037-59.696-26.759-59.733-59.733v-93.867h170.667V435.2z M494.933,324.267h-76.8V213.333H435.2    c32.974,0.037,59.696,26.759,59.733,59.733V324.267z"/>
                                </g>
                            </g>
                        </svg>
                            <h3>Courses</h3>
                            <p>Browse all the courses according to your department</p>
                        </div>
                    </Link>
                    <Link to="/comingsoon">
                        <div className="item">
                        <svg  x="0px" y="0px" height="60" viewBox="0 0 511 511">
                            <g>
                                <path d="M39.5,231h24c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-24c-4.142,0-7.5,3.358-7.5,7.5S35.358,231,39.5,231z"/>
                                <path d="M39.5,167h168c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-168c-4.142,0-7.5,3.358-7.5,7.5S35.358,167,39.5,167z"/>
                                <path d="M239.5,167h32c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-32c-4.142,0-7.5,3.358-7.5,7.5S235.358,167,239.5,167z"/>
                                <path d="M375.5,167h96c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-96c-4.142,0-7.5,3.358-7.5,7.5S371.358,167,375.5,167z"/>
                                <path d="M375.5,216c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3c1.39,1.4,3.33,2.2,5.3,2.2   c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3C379.41,216.8,377.47,216,375.5,216z"/>
                                <path d="M380.8,282.2c-1.39-1.4-3.33-2.2-5.3-2.2c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3   c1.39,1.4,3.33,2.2,5.3,2.2c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3S382.2,283.59,380.8,282.2z"/>
                                <path d="M375.5,344c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3c1.39,1.4,3.33,2.2,5.3,2.2   c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3C379.41,344.8,377.47,344,375.5,344z"/>
                                <path d="M407.5,344c-1.98,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3c1.39,1.4,3.32,2.2,5.3,2.2   c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3C411.41,344.8,409.48,344,407.5,344z"/>
                                <path d="M375.5,408c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3c1.39,1.4,3.33,2.2,5.3,2.2   c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3C379.41,408.8,377.47,408,375.5,408z"/>
                                <path d="M407.5,408c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3c1.39,1.4,3.33,2.2,5.3,2.2   c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3C411.41,408.8,409.47,408,407.5,408z"/>
                                <path d="M444.8,346.2c-1.39-1.4-3.33-2.2-5.3-2.2c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.32-2.2,5.3s0.8,3.91,2.2,5.3   c1.39,1.4,3.33,2.2,5.3,2.2c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3S446.2,347.59,444.8,346.2z"/>
                                <path d="M412.8,218.2c-1.39-1.4-3.32-2.2-5.3-2.2s-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3   c1.39,1.4,3.33,2.2,5.3,2.2c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3S414.2,219.59,412.8,218.2z"/>
                                <path d="M63.5,408h-24c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24c4.142,0,7.5-3.358,7.5-7.5S67.642,408,63.5,408z"/>
                                <path d="M143.5,103h224c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-224c-4.142,0-7.5,3.358-7.5,7.5S139.358,103,143.5,103z"/>
                                <path d="M39.5,295h24c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-24c-4.142,0-7.5,3.358-7.5,7.5S35.358,295,39.5,295z"/>
                                <path d="M63.5,344h-24c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24c4.142,0,7.5-3.358,7.5-7.5S67.642,344,63.5,344z"/>
                                <path d="M215.5,344h-16c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16c4.142,0,7.5-3.358,7.5-7.5S219.642,344,215.5,344z"/>
                                <path d="M199.5,423h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S195.358,423,199.5,423z"/>
                                <path d="M215.5,280h-16c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16c4.142,0,7.5-3.358,7.5-7.5S219.642,280,215.5,280z"/>
                                <path d="M199.5,231h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S195.358,231,199.5,231z"/>
                                <path d="M247.5,231h32c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-32c-4.142,0-7.5,3.358-7.5,7.5S243.358,231,247.5,231z"/>
                                <path d="M303.5,280h-56c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h56c4.142,0,7.5-3.358,7.5-7.5S307.642,280,303.5,280z"/>
                                <path d="M263.5,344h-16c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16c4.142,0,7.5-3.358,7.5-7.5S267.642,344,263.5,344z"/>
                                <path d="M247.5,423h32c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-32c-4.142,0-7.5,3.358-7.5,7.5S243.358,423,247.5,423z"/>
                                <path d="M471.5,56h-432C17.72,56,0,73.72,0,95.5v320C0,437.28,17.72,455,39.5,455h432c21.78,0,39.5-17.72,39.5-39.5v-320   C511,73.72,493.28,56,471.5,56z M175,376v-49h161v49H175z M336,391v49H175v-49H336z M496,135v49H351v-49H496z M336,199v49H175v-49   H336z M160,248H15v-49h145V248z M160,263v49H15v-49H160z M175,263h161v49H175V263z M351,263h145v49H351V263z M351,248v-49h145v49   H351z M336,184H15v-49h321V184z M15,327h145v49H15V327z M351,327h145v49H351V327z M39.5,71h432c13.509,0,24.5,10.991,24.5,24.5V120   H15V95.5C15,81.991,25.991,71,39.5,71z M15,415.5V391h145v49H39.5C25.991,440,15,429.009,15,415.5z M471.5,440H351v-49h145v24.5   C496,429.009,485.009,440,471.5,440z"/>
                            </g>
                        </svg>
                            <h3>Make a table</h3>
                            <p>Customize your own table with a much cooler UI than your college's shitty website</p>
                        </div>
                    </Link>
                    <Link to="/comingsoon">
                        <div className="item">
                        <svg x="0px" y="0px" viewBox="0 0 512 512" height="60">
                            <path d="M100.5,432h311c33.084,0,60-26.916,60-60V60c0-33.084-26.916-60-60-60h-311c-33.084,0-60,26.916-60,60v392  c0,33.084,26.916,60,60,60h291h20c33.084,0,60-26.916,60-60v-0.05c-16.725,12.583-37.506,20.05-60,20.05h-20h-291  c-11.028,0-20-8.972-20-20S89.472,432,100.5,432z M80.5,60c0-11.028,8.972-20,20-20h311c11.028,0,20,8.972,20,20v312  c0,11.028-8.972,20-20,20h-311c-7.009,0-13.742,1.208-20,3.427V60z M222.5,168.58h-40c0-20.518,8.794-40.157,24.128-53.884  c15.535-13.908,36.433-20.556,57.34-18.234c33.493,3.717,60.463,30.617,64.129,63.964c3.343,30.414-14.493,52.238-28.2,66.008  c-3.528,3.544-6.784,6.649-9.657,9.39c-13.069,12.464-14.734,14.56-14.734,23.172V260h-40v-1.005  c0-26.247,12.572-38.236,27.129-52.119c2.828-2.697,5.753-5.486,8.913-8.661c12.917-12.977,17.938-22.971,16.79-33.419  c-1.638-14.89-13.741-26.909-28.781-28.578c-9.746-1.078-19.074,1.858-26.249,8.282C226.338,150.738,222.5,159.29,222.5,168.58z   M235.5,290h40v40h-40V290z"/>
                        </svg>
                            <h3>Guide</h3>
                            <p>Some advices from students with lower than 3 GPA</p>
                        </div>
                    </Link>
                    <a href="mailto:alykhaled2001@live.com">
                    <div className="item">
                    <svg x="0px" y="0px" viewBox="0 0 512 512" height="60">
                        <g>
                            <g>
                                <g>
                                    <path d="M117.333,149.333H352c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667H117.333     c-5.896,0-10.667,4.771-10.667,10.667C106.667,144.563,111.438,149.333,117.333,149.333z"/>
                                    <path d="M245.333,256h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128     c5.896,0,10.667-4.771,10.667-10.667C256,260.771,251.229,256,245.333,256z"/>
                                    <path d="M471.167,64c-0.618,0-1.217,0.155-1.833,0.184V64c0-23.531-19.146-42.667-42.667-42.667h-384     C19.146,21.333,0,40.469,0,64v416c0,4.313,2.604,8.208,6.583,9.854c1.313,0.552,2.708,0.813,4.083,0.813     c2.771,0,5.5-1.083,7.542-3.125L121.75,384h304.917c23.521,0,42.667-19.135,42.667-42.667V164.411l30.708-30.703c0,0,0,0,0-0.01     c7.604-7.604,11.958-18.125,11.958-28.865C512,82.313,493.688,64,471.167,64z M448,341.333c0,11.76-9.563,21.333-21.333,21.333     H117.333c-2.833,0-5.542,1.125-7.542,3.125L21.333,454.25V64c0-11.76,9.563-21.333,21.333-21.333h384     C438.438,42.667,448,52.24,448,64v7.286c-2.025,1.392-3.962,2.923-5.708,4.672L326.232,192H117.333     c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h191.785l-10.243,51.24     c-0.708,3.5,0.396,7.115,2.917,9.635c2.021,2.021,4.75,3.125,7.542,3.125c0.688,0,1.396-0.073,2.083-0.208l53.313-10.667     c2.083-0.417,3.979-1.427,5.458-2.917L448,185.742V341.333z M357.396,246.177l-34.458,6.896l6.896-34.5l96.828-96.828     l27.587,27.587L357.396,246.177z M484.958,118.625l-15.625,15.625l-27.589-27.589l15.63-15.63     c3.625-3.615,8.646-5.698,13.792-5.698c10.75,0,19.5,8.75,19.5,19.5C490.667,109.958,488.583,114.99,484.958,118.625z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                        <h3>Feedback</h3>
                        <p>Send us your feedback in case we need it (Most probably we don't care)</p>
                    </div>
                </a>
                </div>

            </div>
        </div>
    )
}

export default Home

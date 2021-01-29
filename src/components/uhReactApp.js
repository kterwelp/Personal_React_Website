import React, { Component } from 'react';

class UHReactApp extends Component {
    render() {
        return (
            <div>
                <div className="ios-text">
                    <h1>React Project</h1>
                    <p style={{marginBottom: '10px'}}>Description:  At the University of Houston, I contributed to a 
                                                      real-world React web application for a local business in Houston,
                                                      Texas.  This was a group project in a course that prepares students
                                                      for the start of their careers in software development.  I was 
                                                      required to sign a non-disclosure agreement (NDA) at the beginning 
                                                      of the project.  Therefore, I can only disclose certain information.</p>

                    <p style={{marginTop: '10px', marginBottom: '10px'}}>My group chose me as the leader of the project due to my abilities to 
                                                   communicate effectively and make difficult decisions allowing for our
                                                   group's success by the end of the project.  While our group struggled
                                                   in the beginning, I was able to collaborate with my teammates, the 
                                                   professors and the company representatives to lead our team to the 
                                                   completion of a successful final product.  In the end, both the 
                                                   professors and company representatives provided positive feedback
                                                   about our growth throughout the process.  They were also surprised
                                                   by the final product at the end of the semester.</p>

                    <p style={{marginTop: '10px', marginBottom: '10px'}}>The React web application was created for supply chain management.  The application was responsive 
                    and provided many features to simplify the supply chain process.  Our group was also able to achieve 
                    nearly 100% test coverage for both the frontend and backend of the application.  While I was involved 
                    in all parts of the application, my primary role beyond leadership duties involved the frontend of the 
                    application.</p>

                    <p style={{marginTop: '10px'}}>While this course was very challenging, I know it prepared me well for a future career in software
                    development.  I am confident I can be a successful Software Developer or Software Engineer.  In addition, 
                    I know I can be a leader at my future employer.</p>

                    <p>Frontend:  React</p>
                    <p>Backend:  Python Flask and MemSQL</p>
                    <p>Testing:  Jest, Enzyme and Postman</p>
                    <p>Continuous Integration:  Jenkins and SVN</p>
                </div>

            </div>
        )
    }
}

export default UHReactApp;
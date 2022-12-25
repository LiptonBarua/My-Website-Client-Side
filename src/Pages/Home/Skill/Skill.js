import React from 'react';

import './Skill.css'

const Skill = () => {
    return (
        <div className=''>
          <h1 className='text-center divider text-2xl md:text-3xl mt-24'>My Skill</h1>
    <div className="skills grid md:grid-cols-2">
      <p className="skl"></p>
      <p className="skl sklLine">_________</p>
      <div className="htmlProg ProgWidth mb-4">
        <div className="p">
          <p>HTML</p>
          <p>95%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar htmlBar"></span>
          </div>
        </div>
      </div>
      <div className="cssProg ProgWidth mb-4">
        <div className="p">
          <p>CSS</p>
          <p>70%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar cssBar"></span>
          </div>
        </div>
      </div>
      <div className="jsProg ProgWidth mb-4">
        <div className="p">
          <p>Tailwind CSS</p>
          <p>75%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar jsBar"></span>
          </div>
        </div>
      </div>
      <div className="javaProg ProgWidth mb-4">
        <div className="p">
          <p>Bootstrap</p>
          <p>85%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar javaBar"></span>
          </div>
        </div>
      </div>
      <div className="c/c++Prog ProgWidth mb-4">
        <div className="p">
          <p>JavaScript</p>
          <p>80%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar ccpBar"></span>
          </div>
        </div>
      </div>
      <div className="reactProg ProgWidth mb-4">
        <div className="p">
          <p>React.js</p>
          <p>70%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar reactBar"></span>
          </div>
        </div>
      </div>
      <div className="nodeProg ProgWidth mb-4">
        <div className="p">
          <p>Mongodb</p>
          <p>35%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar nodeBar"></span>
          </div>
        </div>
      </div>
      <div className="sqlProg ProgWidth mb-4">
        <div className="p">
          <p>Node.js</p>
          <p>85%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar sqlBar"></span>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Skill;
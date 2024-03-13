import React from 'react'
import sty from './profile.module.css'

function Profile() {
    return (
        <div className='main-container'>
            <main className={sty.profileCard}>
                <div><img className={sty.coverImage} src='' alt='cover-pic'/></div>
                <img className={sty.profilePic} src="../../public/assests/images/images.jpeg" alt='profile-pic' />
                <div className={sty.details}>
                    <h1 className={sty.name}>
                        Om Verma
                    </h1>

                    <div className={sty.location}><span >NEW Delhi</span></div>
                    <p className={sty.description}>
                        Developer
                    </p>
                    <div className={sty.button}>
                        <button className={sty.messageButton}>Message me</button>
                        <button className={sty.followButton}>Follow me</button>
                    </div>
                    <div className={sty.skills}>
                        <h2>SKILLS</h2>
                        <ul className={sty.skillsList}>
                            <li className={sty.skill}>HTML</li>
                            <li className={sty.skill}>CSS</li>
                            <li className={sty.skill}>Javascript</li>
                            <li className={sty.skill}>React</li>
                            <li className={sty.skill}>DSA</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile
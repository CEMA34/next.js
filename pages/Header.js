import React from "react"

export default function Header() {
    return (    
            <div class="navbar">
                <nav class="nav">

                    <div class="first-nav-div">
                        <h3 class="nav-title">Shortly</h3>
                        <div class="nav-tags">
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Resources</a>
                            <a class="mobile-login" href="#">Login</a>
                        </div>
                    </div>

                    <div>
                        <a class="desktop-login" href="#">Login</a>
                        <button class="button nav-button">Sign up</button>
                    </div>
                </nav>
            </div>
            )
}
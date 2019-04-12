import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>It's very easy to create your own Alexa Skills</h2>
    <p>
      You can use{" "}
      <a href="https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html">
        Alexa Skill Kit and Node
      </a>
    </p>

    <p>
      Or you can use a template editor within{" "}
      <a href="https://blueprints.amazon.com">Alexa Blueprints</a>
    </p>

    <p>
      Follow me on{" "}
      <a href="https://twitter.com/Yoshi123">Twitter for more info</a>!
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

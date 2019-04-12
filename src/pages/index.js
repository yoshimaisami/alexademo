import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>
      Hello. My name is Alexa. I will be your virtual instructor today. Would
      you like to play a game with me?
    </h2>
    <h2>
      If so, please say "Alexa, open Interactive Active Checkpoint" ...and the
      fun will automagically begin :-)
    </h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

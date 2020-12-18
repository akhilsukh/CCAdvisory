import Head from 'next/head'
import Layout from '../../components/Layout'
import SubContainer from '../../components/SubContainer'
import { useRouter } from 'next/router'

function Profile(props) {
  const router = useRouter()
  const { pid } = router.query

  var data = require('./about.json')
  var teams = data['team'];
  var teamnames = [];
  for (var i = 0; i < teams.length; i++) {
    teamnames.push(teams[i]['name'])
  }


  return (
    <Layout id={pid}>
      <div className="flex flex-col lg:w-3/5 xl:w-3/5">
        <SubContainer title={pid}>
          <p>Teams: [{teamnames.toString()}]</p>
        </SubContainer>
      </div>
    </Layout>

  )
}

export default Profile;

// <!-- Calendly inline widget begin -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/akhil-ccadvisory/session" style="min-width:320px;height:630px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
// <!-- Calendly inline widget end -->
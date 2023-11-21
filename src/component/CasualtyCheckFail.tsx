const CasualtyCheckFail = () => {
  return (
    <>
      <h1>
        <b>
          YOU HAVE FAILD THE TEST! Pierce my flesh, break my bones, take my life
          These matter not In my sacrifice, ye of the Dark Gods shall know
          defeat For even in Death shall we be triumphant in His name
        </b>
      </h1>
      <div>
        <p>
          For each friendly MEDIC operative that was selected for deployment, so
          long as it was not incapacitated during that battle, you can re-roll
          one Casualty test after the battle.
        </p>
        <p>
          To determine what Battle Scar an operative gains, roll one D6,
          subtract 1 from the result for each other Battle Scar that operative
          has, then consult the Battle Scars table below.
        </p>
        <p>
          Each time the result corresponds to a Battle Scar that operative
          already has, re-roll the D6 until a Battle Scar is determined that the
          operative does not have.
        </p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="D6">D6</abbr>
            </th>
            <th>Resut</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr title="D6">D6</abbr>
            </th>
            <th>Result</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            Slain: This operative can no longer be used. Remove it from your
            dataslate.
          </tr>
          <tr>
            Critical Impairment: This operative cannot perform Dash actions and
            its APL characteristic cannot be increased.
          </tr>
          <tr>
            Severe Concussion: This operative always suffers the penalty to the
            Ballistic Skill characteristic of its ranged weapons as if it were
            injured.
          </tr>
          <tr>
            Sapped Strength: This operative always suffers the penalty to the
            Weapon Skill characteristic of its melee weapons as if it were
            injured.
          </tr>
          <tr>
            Lingering Ailment: This operative always suffers the penalty to its
            Movement characteristic as if it were injured.
          </tr>
          <tr>
            Cerebral Affliction: This operative does not gain a Battle Scar but
            does not gain any experience from this battle.
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CasualtyCheckFail

<template>
  <section class="login hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered is-bold">
          <div class="column is-5-tablet is-6-desktop is-3-widescreen box">
            <!-- form -->
            <b-field label="Email">
              <b-input placeholder="e.g. bobsmith@gmail.com" required />
            </b-field>
            <b-field label="Password">
              <b-input type="password" maxlength="30" required />
            </b-field>

            <div class="field">
              <b-checkbox>Remember me</b-checkbox>
            </div>
            <b-button type="is-success">
              Login
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

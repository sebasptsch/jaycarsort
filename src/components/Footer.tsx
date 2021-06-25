import React from 'preact/compat';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Jaycar Sort</strong> by{' '}
          <a href="https://sebasptsch.dev">Sebastian Pietschner</a>. The source
          code is licensed under{' '}
          <a href="https://choosealicense.com/licenses/mit/">MIT</a>.
          Documentation and new releases can be found on{' '}
          <a href="https://github.com/sebasptsch/jaycarsort">Github</a>.
        </p>
      </div>
    </footer>
  );
}
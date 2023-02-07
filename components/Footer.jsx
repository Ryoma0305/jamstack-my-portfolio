export function Footer() {
  return (
    <footer class="footer" id="footer">
      <p class="notosans footer-text">
        制作の依頼、ご相談お気軽にご連絡下さい。
      </p>
      <p class="button-container robot">
        <a
          href="<?php echo home_url('/contact'); ?>"
          class="button button-footer"
        >
          CONTACT
        </a>
      </p>
    </footer>
  );
}

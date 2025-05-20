const Footer = () => {
  return (
    <footer className='border-t border-border bg-transparent py-8 text-center'>
      <div className='mb-8 pt-8 text-center text-muted-foreground'>
        <p>&copy; {new Date().getFullYear()} Sumin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

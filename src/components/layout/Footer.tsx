const Footer = () => {
  return (
    <footer className='z-50 border-t border-border bg-transparent py-8 text-center'>
      <div className='text-center text-muted-foreground'>
        <p>&copy; {new Date().getFullYear()} Sumin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

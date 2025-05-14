const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit logic here...
    // After successful submission:
    navigate('/ContactPop');
  };
const handler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const projects = [
    {
      id: 1,
      name: 'Project 1',
      link: 'https://github.com/andreykapas/word-analytics',
    },
    {
      id: 2,
      name: 'Project 2',
      link: 'https://github.com/andreykapas/my-personal-page',
    },
  ];
  res.status(200).json(projects);
};

export default handler;

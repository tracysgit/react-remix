
export default function FeaturesRoute() {
  return (
    <>
      <h2>Features</h2>
      <ul>
        <li>Built with React-Remix</li>
        <li>Static JSON data file of artwork for easy maintenance</li>
        <li>Parameterized routing (work/pieceId)</li>
        <li>Unique &lt;head&gt; content on each page</li>
        <li>Built with accessibility in mind (color contrast, aria attributes, focus rings, headline hierarchy, etc.)</li>
        <li>Uses webp and jpg images</li>
        <li>Optimized for light mode but also handles dark mode</li>
      </ul>
      <br />
      <h2>Future Improvements</h2>
      <ul style={{marginBottom: "100px"}}>
        <li>Improve accessibility of mobile menu</li> 
        <li>Add JSON data to a database</li>        
        <li>Provide an interface to add artwork via the web</li> 
        <li>Image compression/optimizer or lazy load</li>   
      </ul>
    </>
  );
}
import CardProject from "../ui/CardProject";


const esagdescription =
  "<ul><li><strong>Website creation</strong></li><li><strong>Implementation of registration forms</strong></li><li><strong>Staff training for site management</strong></li></ul><p><em>WordPress – ReactJS – BootstrapCSS</em></p>";

const recdescrion =
  "<ul><li><strong>Website creation</strong></li><li><strong>Development of a parcel tracking system</strong></li></ul><p><em>Ktor – WordPress – Jetpack Compose – Firebase</em></p>";

function ProjectsMine() {
  return (
    <section
      className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-32 scroll-mt-16"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-violet-800 mb-4">My Projects</h1>
        <p className="text-lg text-gray-700 mb-8">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardProject
          imageSrc="/assets/esag.png"
          title="ESAG NDE"
          description={esagdescription}
          link="https://esagnde.org/"
          logo="/assets/logoesag.png"
        />
        <CardProject
          imageSrc="/assets/rec.png"
          title="REC LOGISTICS"
          description={recdescrion}
          link="https://reclogistics.com/"
          logo="/assets/logorec.png"
        />
        <CardProject
          imageSrc="/assets/228.png"
          title="228 NEWS"
          description={recdescrion}
          link="https://228news.tg/"
          logo="/assets/logo228.png"
        />
        <CardProject
          imageSrc="/assets/relocationservice.png"
          title="Relocation Service"
          description={recdescrion}
          link="https://relocationserviceyenke.com/"
          logo="/assets/logorelocation.png"
        />
        <CardProject
          imageSrc="/assets/yemag.png"
          title="YEMAG"
          description={recdescrion}
          link="https://yemag-uni.com/"
          logo="/assets/logoyemag.jpg"
        />
        <CardProject
          imageSrc="/assets/srnde.png"
          title="SOEURS NDE TOGO"
          description={recdescrion}
          link="https://soeurndetogo.com/"
          logo="/assets/logosrnde.png"
        />
      </div>
    </section>
  );
}


export default ProjectsMine;

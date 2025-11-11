import React from "react";

export default function GazeVal() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="columns is-centered">
              <div className="column has-text-centered">
                <h1 className="title is-1 publication-title">Eyes Tell the Truth: GazeVal Highlights Shortcomings of Generative AI in Medical Imaging</h1>
                <div className="is-size-5 publication-authors">
                  <span className="author-block"><a href="#">David Wong*</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Bin Wang*</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Gorkem Durak</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Marouane Tliba</a><sup>2</sup>,</span>
                  <span className="author-block"><a href="#">Akshay Chaudhari</a><sup>3</sup>,</span>
                  <span className="author-block"><a href="#">Aladine Chetouani</a><sup>4</sup>,</span>
                  <span className="author-block"><a href="#">Ahmet Enis Cetin</a><sup>2</sup>,</span>
                  <span className="author-block"><a href="#">Cagdas Topel</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Nicolo Gennaro</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Camila Lopes Vendrami</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Tugce Agirlar Trabzonlu</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Amir Ali Rahsepar</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Laetitia Perronne</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Matthew Antalek</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Onural Ozturk</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Gokcan Okur</a><sup>5</sup>,</span>
                  <span className="author-block"><a href="#">Andrew C. Gordon</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Ayis Pyrros</a><sup>6</sup>,</span>
                  <span className="author-block"><a href="#">Frank H. Miller</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Amir Borhani</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Hatice Savas</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Eric Hart</a><sup>1</sup>,</span>
                  <span className="author-block"><a href="#">Drew Torigian</a><sup>7</sup>,</span>
                  <span className="author-block"><a href="#">Jayaram K. Udupa</a><sup>7</sup>,</span>
                  <span className="author-block"><a href="#">Elizabeth Krupinski</a><sup>8</sup>,</span>
                  <span className="author-block"><a href="#">Ulas Bagci</a><sup>1</sup></span>
                </div>

                <div className="is-size-5 publication-authors">
                  <span className="author-block"><sup>1</sup>Northwestern University,</span>
                  <span className="author-block"><sup>2</sup>University of Illinois at Chicago,</span>
                  <span className="author-block"><sup>3</sup>Stanford University,</span>
                  <span className="author-block"><sup>4</sup>Université Sorbonne Paris Nord,</span>
                  <span className="author-block"><sup>5</sup>Loyola University Chicago,</span>
                  <span className="author-block"><sup>6</sup>DuPage Medical Group,</span>
                  <span className="author-block"><sup>7</sup>University of Pennsylvania,</span>
                  <span className="author-block"><sup>8</sup>Emory University</span>
                </div>
                <div className="is-size-6"><em>* Equal contribution.</em></div>

                <div className="column has-text-centered">
                  <div className="publication-links">
                    <span className="link-block">
                      <a href="https://arxiv.org/pdf/2503.20967" className="external-link button is-normal is-rounded is-dark" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                          <i className="fas fa-file-pdf"></i>
                        </span>
                        <span>Paper</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero teaser">
        <div className="container is-max-desktop">
          <div className="hero-body">
            <div className="image-container">
              <img className="img-responsive" src="/assets/gazeval/framework.png" alt="Teaser Image" />
            </div>
            <h2 className="subtitle has-text-centered">
              Overview of the proposed GazeVal framework, which introduces two tasks with corresponding evaluation metrics to quantitatively assess the quality of synthetic Chest X-ray images with expert knowledge.
            </h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-desktop">
          <div className="columns is-centered has-text-centered">
            <div className="column is-four-fifths">
              <h2 className="title is-3">Abstract</h2>
              <div className="content has-text-justified">
                <p>
                  The demand for high-quality synthetic data for model training and augmentation has never been greater in medical imaging. However, current evaluations predominantly rely on computational metrics that fail to align with human expert recognition. This leads to synthetic images that may appear realistic numerically but lack clinical authenticity, posing significant challenges in ensuring the reliability and effectiveness of AI-driven medical tools. To address this gap, we introduce GazeVal, a practical framework that synergizes expert eye-tracking data with direct radiological evaluations to assess the quality of synthetic medical images. GazeVal leverages gaze patterns of radiologists as they provide a deeper understanding of how experts perceive and interact with synthetic data in different tasks (i.e., diagnostic or Turing tests). Experiments with sixteen radiologists revealed that 96.6% of the generated images (by the most recent state-of-the-art AI algorithm) were identified as fake, demonstrating the limitations of generative AI in producing clinically accurate images.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-desktop">
          <div className="columns is-centered ">
            <div className="column is-full-width">
              <h2 className="title is-3 has-text-centered" style={{ marginTop: -30 }}>Methods</h2>
              <br />
              <div className="subtitle has-text-justified">
                <p>
                  Given a real chest X-ray image and its associated report, a synthetic chest X-ray image is generated based on the report by an LDM-based generative model, RoentGen. The synthetic images are then placed in a dataset with real images and reviewed by radiologists under two task settings. First, radiologists are asked to provide a diagnosis without knowing that synthetic images are included. Second, they are asked to determine whether each image is real or generated. At the same time, we use eye tracking to record their eye gaze during the tasks. Using the gaze data and their task answers, we can compare synthetic and real X-rays across various metrics to evaluate the quality of the synthetic images.
                </p>
              </div>
              <div className="image-container">
                <img className="img-responsive" src="/assets/gazeval/setup.png" alt="one click" />
              </div>
              <br />
              <div className="subtitle has-text-justified">
                <p>Left: Eye tracking setup. The radiologist is viewing the image on the monitor with the eye tracker in between them. Middle: EyeLink 1000 Plus eye-tracker view with calibration software. Right: Eye-tracker and example attention map.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-desktop">
          <div className="columns is-centered ">
            <div className="column is-full-width">
              <h2 className="title is-3 has-text-centered" style={{ marginTop: -30 }}>Results</h2>
              <br />
              <div className="subtitle has-text-justified">
                <p>
                  (1) This means the diagnostic agreement for real and synthetic images are similar.
                </p>
                <p>
                  (2) Radiologists can accurately distinguish between real and synthetic images, which means the current state-of-the-art generative model are unable to generate highly realistic radiological images yet.
                </p>
              </div>
              <div className="image-container">
                <img className="img-responsive" src="/assets/gazeval/Box_Whisker2.png" alt="one click" />
              </div>
              <br />
              <div className="subtitle has-text-justified">
                <p>
                  (3) Differing viewing patterns of real and synthetic X-rays are present and increase with prolonged visual processing.
                </p>
              </div>
              <div className="image-container">
                <img className="img-responsive" src="/assets/gazeval/table.png" alt="one click" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-desktop">
          <div className="columns is-centered ">
            <div className="column is-full-width">
              <div className="subtitle has-text-justified">
                <p>
                  (4) Using both Fixation-Based and Scanpath-Based Congruency, as well as shared attention calculations, we quantitatively determine that visual attention is task-guided.
                </p>
              </div>
              <div className="image-container">
                <img className="img-responsive" src="/assets/gazeval/Table2.png" style={{ maxWidth: "100%", height: "auto" }} alt="one click" />
              </div>
              <br />
              <div className="image-container">
                <img className="img-responsive" src="/assets/gazeval/IoUFigure3.png" style={{ maxWidth: "100%", height: "auto" }} alt="one click" />
              </div>
              <br />
              <div className="subtitle has-text-justified">
                <p>
                  (5) Generative models struggle more to generate realistic X-rays when containing pathologies.
                </p>
              </div>
              <div className="image-container">
                <img className="img-responsive" src="/assets/gazeval/pathology.png" alt="one click" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="BibTeX">
        <div className="container is-max-desktop content">
          <h2 className="title">BibTeX</h2>
          <pre className="bibtex">
            <code>{`@misc{wong2025eyestelltruthgazeval,
  title={Eyes Tell the Truth: GazeVal Highlights Shortcomings of Generative AI in Medical Imaging}, 
  author={David Wong and Bin Wang and Gorkem Durak and Marouane Tliba and Akshay Chaudhari and Aladine Chetouani and Ahmet Enis Cetin and Cagdas Topel and Nicolo Gennaro and Camila Lopes Vendrami and Tugce Agirlar Trabzonlu and Amir Ali Rahsepar and Laetitia Perronne and Matthew Antalek and Onural Ozturk and Gokcan Okur and Andrew C. Gordon and Ayis Pyrros and Frank H. Miller and Amir Borhani and Hatice Savas and Eric Hart and Drew Torigian and Jayaram K. Udupa and Elizabeth Krupinski and Ulas Bagci},
  year={2025},
  eprint={2503.20967},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2503.20967}, 
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function VideoAIPage() {
  const [prompt, setPrompt] = useState('')
  const [videoGenerated, setVideoGenerated] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulated API call
    setTimeout(() => {
      setVideoGenerated(true)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="main-wrapper">
      <Header />
      
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5">Video AI Generator</h2>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Generate Video</h5>
                  <form onSubmit={handleGenerate}>
                    <div className="mb-3">
                      <label className="form-label">Video Description</label>
                      <textarea
                        className="form-control"
                        rows="6"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the video you want to generate..."
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Duration (seconds)</label>
                      <select className="form-control">
                        <option>15</option>
                        <option>30</option>
                        <option>60</option>
                      </select>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Generating...' : 'Generate Video'}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Preview</h5>
                  <div className="output-box" style={{ minHeight: '300px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
                    {videoGenerated ? (
                      <div className="w-100">
                        <video controls className="w-100" style={{ marginBottom: '15px' }}>
                          <source src="" type="video/mp4" />
                          Your browser does not support the video element.
                        </video>
                        <button className="btn btn-secondary w-100">Download Video</button>
                      </div>
                    ) : (
                      <p className="text-muted">Generated video will appear here...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default VideoAIPage

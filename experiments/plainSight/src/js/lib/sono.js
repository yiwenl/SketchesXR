!(function(e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : (e.sono = n());
})(this, function() {
  "use strict";
  function e(e) {
    if ("string" != typeof e) return "";
    if ("data:" === e.slice(0, 5)) {
      var n = e.match(/data:audio\/(ogg|mp3|opus|wav|m4a)/i);
      if (n && n.length > 1) return n[1].toLowerCase();
    }
    (e = e.split("?")[0]), (e = e.slice(e.lastIndexOf("/") + 1));
    var t = e.split(".");
    return 1 === t.length || ("" === t[0] && 2 === t.length)
      ? ""
      : t.pop().toLowerCase();
  }
  function n(n) {
    var t = void 0;
    if (Array.isArray(n))
      for (var r = 0; r < n.length; r++) {
        t = n[r];
        var o = e(t);
        if (ne.indexOf(o) > -1) break;
      }
    else
      "object" === ("undefined" == typeof n ? "undefined" : J(n)) &&
        Object.keys(n).some(function(r) {
          t = n[r];
          var o = e(t);
          return ne.indexOf(o) > -1;
        });
    return t || n;
  }
  function t(e) {
    return !!(e && window.AudioBuffer && e instanceof window.AudioBuffer);
  }
  function r(e) {
    return !!(e && window.ArrayBuffer && e instanceof window.ArrayBuffer);
  }
  function o(e) {
    return !!(
      e &&
      window.HTMLMediaElement &&
      e instanceof window.HTMLMediaElement
    );
  }
  function i(e) {
    return !!(
      e &&
      "function" == typeof e.getAudioTracks &&
      e.getAudioTracks().length &&
      window.MediaStreamTrack &&
      e.getAudioTracks()[0] instanceof window.MediaStreamTrack
    );
  }
  function u(e) {
    return !(
      !e ||
      "string" != typeof e ||
      ("sine" !== e && "square" !== e && "sawtooth" !== e && "triangle" !== e)
    );
  }
  function a(e) {
    return !!(
      e &&
      "object" === ("undefined" == typeof e ? "undefined" : J(e)) &&
      e.bufferSize &&
      e.channels &&
      e.callback
    );
  }
  function c(e) {
    return !(
      !e ||
      "string" != typeof e ||
      !(e.indexOf(".") > -1 || "data:" === e.slice(0, 5))
    );
  }
  function s(e) {
    if (!e || o(e)) return !1;
    var n = e.src || e.url || e.data || e;
    return c(n) || r(n) || (Array.isArray(n) && c(n[0]));
  }
  function f(e, n) {
    function t(e) {
      var n = 12 * (Math.log(e / 440) / Math.log(2));
      return Math.round(n) + 69;
    }
    function r(e) {
      return 440 * Math.pow(2, (e - 69) / 12);
    }
    function o(e, n) {
      return Math.floor((1200 * Math.log(e / r(n))) / Math.log(2));
    }
    function i(e, n) {
      return (
        !e ||
        (a.fftSize !== c ||
          (!!(n && e instanceof Uint8Array) ||
            (!n && e instanceof Float32Array)))
      );
    }
    function u(e, n) {
      return e ? new Float32Array(n) : new Uint8Array(n);
    }
    n = n || {};
    var a = e.createAnalyser(),
      c = n.fftSize || 512,
      s = !!n.float,
      f = !!n.float,
      l = void 0,
      d = void 0;
    (a.fftSize = c),
      (a.smoothingTimeConstant =
        n.smoothing || n.smoothingTimeConstant || a.smoothingTimeConstant),
      (a.minDecibels = n.minDecibels || a.minDecibels),
      (a.maxDecibels = n.maxDecibels || a.maxDecibels);
    var v = new Blob([
        "onmessage=function(e){var data=e.data;var f=new Float32Array(data.b);for(var i=0;i<f.length;i++){data.sum+=f[i]}data.sum/=f.length;postMessage(Math.max(1.0-(data.sum/data.numSamples*-1.0),0))};"
      ]),
      p = new Blob([
        "onmessage=function(e){var data=e.data;var sampleRate=data.sampleRate;var buf=new Float32Array(data.b);var SIZE=buf.length;var MAX_SAMPLES=Math.floor(SIZE/2);var best_offset=-1;var best_correlation=0;var rms=0;var foundGoodCorrelation=false;var correlations=new Array(MAX_SAMPLES);for(var i=0;i<SIZE;i++){var val=buf[i];rms+=val*val}rms=Math.sqrt(rms/SIZE);if (rms<0.01){postMessage(-1)}else{var lastCorrelation=1;for(var offset=0;offset<MAX_SAMPLES;offset++){var correlation=0;for(var i=0;i<MAX_SAMPLES;i++){correlation+=Math.abs((buf[i])-(buf[i+offset]))}correlation=1-(correlation/MAX_SAMPLES);correlations[offset]=correlation;if ((correlation>0.9)&&(correlation>lastCorrelation)){foundGoodCorrelation=true;if (correlation>best_correlation){best_correlation=correlation;best_offset=offset}}else if (foundGoodCorrelation){var shift=(correlations[best_offset+1]-correlations[best_offset-1])/correlations[best_offset];postMessage(sampleRate/(best_offset+(8*shift)))}lastCorrelation=correlation}if (best_correlation>0.01){postMessage(sampleRate/best_offset)}else{postMessage(-1)}}};"
      ]),
      g = URL.createObjectURL(v),
      h = new Worker(g),
      m = URL.createObjectURL(p),
      y = new Worker(m),
      b = null,
      w = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
      T = null,
      M = {
        hertz: null,
        note: null,
        noteIndex: null,
        detuneCents: null,
        detune: null
      };
    return (
      (h.onmessage = function(e) {
        b && b(e.data);
      }),
      (y.onmessage = function(e) {
        if (T) {
          var n = e.data;
          if (n !== -1) {
            var r = t(n),
              i = o(n, r);
            (M.hertz = n),
              (M.noteIndex = r % 12),
              (M.note = w[r % 12]),
              (M.detuneCents = i),
              0 === i
                ? (M.detune = "")
                : i < 0
                ? (M.detune = "flat")
                : (M.detune = "sharp");
          }
          T(M);
        }
      }),
      (a.getWaveform = function(e) {
        return (
          arguments.length || (e = f),
          i(l, e) && ((c = a.fftSize), (f = e), (l = u(e, c))),
          e && this.getFloatTimeDomainData
            ? this.getFloatTimeDomainData(l)
            : this.getByteTimeDomainData(l),
          l
        );
      }),
      (a.getPitch = function(n) {
        T = T || n;
        var t = new Float32Array(a.fftSize);
        t.set(a.getWaveform(!0)),
          y.postMessage({ sampleRate: e.sampleRate, b: t.buffer }, [t.buffer]);
      }),
      (a.getFrequencies = function(e) {
        return (
          arguments.length || (e = s),
          i(d, e) &&
            ((c = a.fftSize), (s = e), (d = u(e, a.frequencyBinCount))),
          e ? this.getFloatFrequencyData(d) : this.getByteFrequencyData(d),
          d
        );
      }),
      (a.getAmplitude = function(e) {
        b = b || e;
        var n = new Float32Array(a.fftSize);
        n.set(a.getFrequencies(!0)),
          h.postMessage(
            {
              sum: 0,
              length: n.byteLength,
              numSamples: a.fftSize / 2,
              b: n.buffer
            },
            [n.buffer]
          );
      }),
      (a.update = function() {
        a.getWaveform(), a.getFrequencies();
      }),
      Object.defineProperties(a, {
        smoothing: {
          get: function() {
            return a.smoothingTimeConstant;
          },
          set: function(e) {
            a.smoothingTimeConstant = e;
          }
        }
      }),
      a
    );
  }
  function l(e, n) {
    return (
      arguments.length < 2 && (n = 0), "number" != typeof e || isNaN(e) ? n : e
    );
  }
  function d(e, n) {
    n = l(n, 1);
    var t = e.createWaveShaper(),
      r = new Float32Array(ue);
    return (
      (t.update = function(e) {
        if (((n = e), n <= 0)) return (n = 0), void (this.curve = null);
        for (var t = 100 * e, o = Math.PI / 180, i = void 0, u = 0; u < ue; u++)
          (i = (2 * u) / ue - 1),
            (r[u] = ((3 + t) * i * 20 * o) / (Math.PI + t * Math.abs(i)));
        this.curve = r;
      }),
      Object.defineProperties(t, {
        amount: {
          get: function() {
            return n;
          },
          set: function(e) {
            this.update(e);
          }
        }
      }),
      "undefined" != typeof n && t.update(n),
      t
    );
  }
  function v(e, n) {
    n = n || {};
    var t = e.createGain(),
      r = e.createDelay(),
      o = e.createGain(),
      i = e.createGain();
    (r.delayTime.value = l(n.delayTime, 0.5)),
      (o.gain.value = l(n.feedback, 0.5)),
      t.connect(r),
      t.connect(i),
      r.connect(o),
      o.connect(r),
      o.connect(i);
    var u = t;
    return (
      (u.name = "Echo"),
      (u._output = i),
      Object.defineProperties(u, {
        delay: {
          get: function() {
            return r.delayTime.value;
          },
          set: function(e) {
            r.delayTime.value = e;
          }
        },
        feedback: {
          get: function() {
            return o.gain.value;
          },
          set: function(e) {
            o.gain.value = e;
          }
        }
      }),
      u
    );
  }
  function p() {
    function e() {}
    function n() {
      return {
        value: 1,
        defaultValue: 1,
        linearRampToValueAtTime: e,
        setValueAtTime: e,
        exponentialRampToValueAtTime: e,
        setTargetAtTime: e,
        setValueCurveAtTime: e,
        cancelScheduledValues: e
      };
    }
    function t() {
      return {
        connect: e,
        disconnect: e,
        frequencyBinCount: 0,
        smoothingTimeConstant: 0,
        fftSize: 0,
        minDecibels: 0,
        maxDecibels: 0,
        getByteTimeDomainData: e,
        getByteFrequencyData: e,
        getFloatTimeDomainData: e,
        getFloatFrequencyData: e,
        gain: n(),
        panningModel: 0,
        setPosition: e,
        setOrientation: e,
        setVelocity: e,
        distanceModel: 0,
        refDistance: 0,
        maxDistance: 0,
        rolloffFactor: 0,
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        type: 0,
        frequency: n(),
        Q: n(),
        detune: n(),
        delayTime: n(),
        buffer: 0,
        threshold: n(),
        knee: n(),
        ratio: n(),
        attack: n(),
        release: n(),
        reduction: n(),
        oversample: 0,
        curve: 0,
        sampleRate: 1,
        length: 0,
        duration: 0,
        numberOfChannels: 0,
        getChannelData: function() {
          return [];
        },
        copyFromChannel: e,
        copyToChannel: e,
        dopplerFactor: 0,
        speedOfSound: 0,
        start: e
      };
    }
    var r = Date.now();
    return (
      window.Uint8Array || (window.Uint8Array = window.Float32Array = Array),
      {
        createAnalyser: t,
        createBuffer: t,
        createBiquadFilter: t,
        createChannelMerger: t,
        createChannelSplitter: t,
        createDynamicsCompressor: t,
        createConvolver: t,
        createDelay: t,
        createGain: t,
        createOscillator: t,
        createPanner: t,
        createScriptProcessor: t,
        createWaveShaper: t,
        listener: t(),
        get currentTime() {
          return (Date.now() - r) / 1e3;
        }
      }
    );
  }
  function g(e) {
    function n(e) {
      var n = Math.log(o / r) / Math.LN2,
        t = Math.pow(2, n * (e - 1));
      return o * t;
    }
    var t =
        arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
      r = 40,
      o = e.sampleRate / 2,
      i = e.createBiquadFilter();
    return (
      (i.type = t.type),
      (i.set = function(e, n, t) {
        return (
          "undefined" != typeof e &&
            "number" == typeof e &&
            (i.frequency.value = e),
          "undefined" != typeof n && "number" == typeof n && (i.Q.value = n),
          "undefined" != typeof t && "number" == typeof t && (i.gain.value = t),
          i
        );
      }),
      (i.setByPercent = function(e, t, r) {
        return i.set(n(e), t, r);
      }),
      i.set(t.frequency, t.q, t.gain)
    );
  }
  function h(e, n) {
    var t = e.createGain(),
      r = e.createDelay(),
      o = e.createGain(),
      i = e.createOscillator(),
      u = e.createGain(),
      a = e.createGain();
    (r.delayTime.value = l(n.delay, 0.005)),
      (o.gain.value = l(n.feedback, 0.5)),
      (i.type = "sine"),
      (i.frequency.value = l(n.frequency, 0.002)),
      (u.gain.value = l(n.gain, 0.25)),
      t.connect(a),
      t.connect(r),
      r.connect(a),
      r.connect(o),
      o.connect(t),
      i.connect(u),
      u.connect(r.delayTime),
      i.start(0);
    var c = t;
    return (
      (c.name = "Flanger"),
      (c._output = a),
      Object.defineProperties(c, {
        delay: {
          get: function() {
            return r.delayTime.value;
          },
          set: function(e) {
            r.delayTime.value = e;
          }
        },
        lfoFrequency: {
          get: function() {
            return i.frequency.value;
          },
          set: function(e) {
            i.frequency.value = e;
          }
        },
        lfoGain: {
          get: function() {
            return u.gain.value;
          },
          set: function(e) {
            u.gain.value = e;
          }
        },
        feedback: {
          get: function() {
            return o.gain.value;
          },
          set: function(e) {
            o.gain.value = e;
          }
        }
      }),
      c
    );
  }
  function m(e, n) {
    var t = e.createGain(),
      r = e.createChannelSplitter(2),
      o = e.createChannelMerger(2),
      i = e.createGain(),
      u = e.createGain(),
      a = e.createOscillator(),
      c = e.createGain(),
      s = e.createGain(),
      f = e.createDelay(),
      d = e.createDelay(),
      v = e.createGain();
    (i.gain.value = u.gain.value = l(n.feedback, 0.5)),
      (f.delayTime.value = d.delayTime.value = l(n.delay, 0.003)),
      (a.type = "sine"),
      (a.frequency.value = l(n.frequency, 0.5)),
      (c.gain.value = l(n.gain, 0.005)),
      (s.gain.value = 0 - c.gain.value),
      t.connect(r),
      r.connect(f, 0),
      r.connect(d, 1),
      f.connect(i),
      d.connect(u),
      i.connect(d),
      u.connect(f),
      f.connect(o, 0, 0),
      d.connect(o, 0, 1),
      o.connect(v),
      t.connect(v),
      a.connect(c),
      a.connect(s),
      c.connect(f.delayTime),
      s.connect(d.delayTime),
      a.start(0);
    var p = t;
    return (
      (p.name = "StereoFlanger"),
      (p._output = v),
      Object.defineProperties(p, {
        delay: {
          get: function() {
            return f.delayTime.value;
          },
          set: function(e) {
            f.delayTime.value = d.delayTime.value = e;
          }
        },
        lfoFrequency: {
          get: function() {
            return a.frequency.value;
          },
          set: function(e) {
            a.frequency.value = e;
          }
        },
        lfoGain: {
          get: function() {
            return c.gain.value;
          },
          set: function(e) {
            c.gain.value = s.gain.value = e;
          }
        },
        feedback: {
          get: function() {
            return i.gain.value;
          },
          set: function(e) {
            i.gain.value = u.gain.value = e;
          }
        }
      }),
      p
    );
  }
  function y(e, n) {
    return (n = n || {}), n.stereo ? new m(e, n) : new h(e, n);
  }
  function b(e) {
    function n(e, n) {
      var t = e.x,
        r = e.y,
        o = e.z,
        i = n.x,
        u = n.y,
        a = n.z;
      (e.x = r * a - o * u), (e.y = o * i - t * a), (e.z = t * u - r * i);
    }
    function t(e) {
      if (0 === e.x && 0 === e.y && 0 === e.z) return e;
      var n = Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z),
        t = 1 / n;
      return (e.x *= t), (e.y *= t), (e.z *= t), e;
    }
    function r(e, r) {
      var o = u.get(r.x, r.y, r.z);
      n(o, a),
        n(o, r),
        t(o),
        t(r),
        e.setOrientation(r.x, r.y, r.z, o.x, o.y, o.z),
        u.dispose(r),
        u.dispose(o);
    }
    function o(e, n) {
      e.setPosition(n.x, n.y, n.z), u.dispose(n);
    }
    var i = e.createPanner();
    (i.panningModel = b.defaults.panningModel),
      (i.distanceModel = b.defaults.distanceModel),
      (i.refDistance = b.defaults.refDistance),
      (i.maxDistance = b.defaults.maxDistance),
      (i.rolloffFactor = b.defaults.rolloffFactor),
      (i.coneInnerAngle = b.defaults.coneInnerAngle),
      (i.coneOuterAngle = b.defaults.coneOuterAngle),
      (i.coneOuterGain = b.defaults.coneOuterGain),
      i.setPosition(0, 0, 1),
      i.setOrientation(0, 0, 0);
    var u = {
        pool: [],
        get: function(e, n, t) {
          var r = this.pool.length ? this.pool.pop() : { x: 0, y: 0, z: 0 };
          return (
            "undefined" != typeof e &&
            isNaN(e) &&
            "x" in e &&
            "y" in e &&
            "z" in e
              ? ((r.x = l(e.x)), (r.y = l(e.y)), (r.z = l(e.z)))
              : ((r.x = l(e)), (r.y = l(n)), (r.z = l(t))),
            r
          );
        },
        dispose: function(e) {
          this.pool.push(e);
        }
      },
      a = u.get(0, 1, 0),
      c = Math.PI / 4,
      s = Math.PI / 2;
    return (
      (i.set = function(e, n, t) {
        var r = u.get(e, n, t);
        1 === arguments.length &&
          r.x &&
          ((e = r.x),
          e > 1 && (e = 1),
          e < -1 && (e = -1),
          (e *= c),
          (t = e + s),
          t > s && (t = Math.PI - t),
          (r.x = Math.sin(e)),
          (r.z = Math.sin(t))),
          o(i, r);
      }),
      (i.setSourcePosition = function(e, n, t) {
        o(i, u.get(e, n, t));
      }),
      (i.setSourceOrientation = function(e, n, t) {
        r(i, u.get(e, n, t));
      }),
      (i.setListenerPosition = function(n, t, r) {
        o(e.listener, u.get(n, t, r));
      }),
      (i.setListenerOrientation = function(n, t, o) {
        r(e.listener, u.get(n, t, o));
      }),
      (i.getDefaults = function() {
        return b.defaults;
      }),
      (i.setDefaults = function(e) {
        Object.keys(e).forEach(function(n) {
          b.defaults[n] = e[n];
        });
      }),
      i
    );
  }
  function w(e) {
    var n =
        arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
      t = l(n.stages, 8),
      r = [],
      o = void 0,
      i = e.createGain(),
      u = e.createGain(),
      a = e.createOscillator(),
      c = e.createGain(),
      s = e.createGain();
    (u.gain.value = l(n.feedback, 0.5)),
      (a.type = "sine"),
      (a.frequency.value = l(n.frequency, 0.5)),
      (c.gain.value = l(n.gain, 300));
    for (var f = 0; f < t; f++)
      (o = e.createBiquadFilter()),
        (o.type = "allpass"),
        (o.frequency.value = 1e3 * f),
        f > 0 && r[f - 1].connect(o),
        c.connect(o.frequency),
        r.push(o);
    var d = r[0],
      v = r[r.length - 1];
    i.connect(d),
      i.connect(s),
      v.connect(s),
      v.connect(u),
      u.connect(d),
      a.connect(c),
      a.start(0);
    var p = i;
    return (
      (p.name = "Phaser"),
      (p._output = s),
      Object.defineProperties(p, {
        lfoFrequency: {
          get: function() {
            return a.frequency.value;
          },
          set: function(e) {
            a.frequency.value = e;
          }
        },
        lfoGain: {
          get: function() {
            return c.gain.value;
          },
          set: function(e) {
            c.gain.value = e;
          }
        },
        feedback: {
          get: function() {
            return u.gain.value;
          },
          set: function(e) {
            u.gain.value = e;
          }
        }
      }),
      p
    );
  }
  function T(e, n) {
    function t(e, n) {
      for (var t = new Float32Array(n), r = 0, o = 0; o < e.length; o++)
        t.set(e[o], r), (r += e[o].length);
      return t;
    }
    function r() {
      if (!a.length) return e.createBuffer(2, u, e.sampleRate);
      var n = a.length * u,
        r = e.createBuffer(2, n, e.sampleRate);
      return (
        r.getChannelData(0).set(t(a, n)), r.getChannelData(1).set(t(c, n)), r
      );
    }
    function o() {
      v && ((v.onaudioprocess = null), l.disconnect(), v.disconnect());
    }
    function i() {
      o(),
        (v = e.createScriptProcessor(u, 2, 2)),
        l.connect(v),
        v.connect(e.destination),
        v.connect(d),
        (v.onaudioprocess = function(e) {
          var t = e.inputBuffer.getChannelData(0),
            r = e.inputBuffer.getChannelData(1);
          if (n) {
            var o = e.outputBuffer.getChannelData(0),
              i = e.outputBuffer.getChannelData(1);
            o.set(t), i.set(r);
          }
          p.isRecording &&
            (a.push(new Float32Array(t)), c.push(new Float32Array(r)));
        });
    }
    var u = 4096,
      a = [],
      c = [],
      s = 0,
      f = 0,
      l = e.createGain(),
      d = e.createGain(),
      v = void 0,
      p = l;
    return (
      (p.name = "Recorder"),
      (p._output = d),
      (p.isRecording = !1),
      (p.start = function() {
        i(),
          (a.length = 0),
          (c.length = 0),
          (s = e.currentTime),
          (f = 0),
          (this.isRecording = !0);
      }),
      (p.stop = function() {
        return (f = e.currentTime), (this.isRecording = !1), o(), r();
      }),
      (p.getDuration = function() {
        return this.isRecording ? e.currentTime - s : f - s;
      }),
      p
    );
  }
  function M(e) {
    var n =
        arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
      t = e.sampleRate,
      r = l(n.time, 1),
      o = l(n.decay, 5),
      i = !!n.reverse,
      u = void 0,
      a = void 0,
      c = e.createGain(),
      s = e.createConvolver(),
      f = e.createGain();
    c.connect(s), c.connect(f), s.connect(f);
    var d = c;
    return (
      (d.name = "Reverb"),
      (d._output = f),
      (d.update = function(n) {
        if (
          ("undefined" != typeof n.time &&
            ((r = n.time),
            (u = Math.floor(t * r)),
            (a = u ? e.createBuffer(2, u, t) : null)),
          "undefined" != typeof n.decay && (o = n.decay),
          "undefined" != typeof n.reverse && (i = n.reverse),
          !a)
        )
          return void (s.buffer = null);
        for (
          var c = a.getChannelData(0),
            f = a.getChannelData(1),
            l = void 0,
            d = void 0,
            v = 0;
          v < u;
          v++
        )
          (l = i ? u - v : v),
            (d = Math.pow(1 - l / u, o)),
            (c[v] = (2 * Math.random() - 1) * d),
            (f[v] = (2 * Math.random() - 1) * d);
        s.buffer = a;
      }),
      d.update({ time: r, decay: o, reverse: i }),
      Object.defineProperties(d, {
        time: {
          get: function() {
            return r;
          },
          set: function(e) {
            e !== r && this.update({ time: e });
          }
        },
        decay: {
          get: function() {
            return o;
          },
          set: function(e) {
            e !== o && this.update({ decay: e });
          }
        },
        reverse: {
          get: function() {
            return i;
          },
          set: function(e) {
            e !== i && this.update({ reverse: !!e });
          }
        }
      }),
      d
    );
  }
  function A(e) {
    function n(e, n) {
      var t = e._output || e;
      t.disconnect(), t.connect(n);
    }
    function t(e) {
      var t = X.length,
        r = t ? X[t - 1] : Z;
      r && n(r, e), (H = e);
    }
    function r() {
      if (Z) {
        for (var e = void 0, r = void 0, o = 0; o < X.length; o++)
          (e = X[o]), (r = 0 === o ? Z : X[o - 1]), n(r, e);
        H && t(H);
      }
    }
    function o(e) {
      return !!e && X.indexOf(e) > -1;
    }
    function i(e) {
      return e ? (o(e) ? e : (X.push(e), r(), e)) : null;
    }
    function u(e) {
      if (!e) return null;
      if (!o(e)) return e;
      for (var n = X.length, t = 0; t < n; t++)
        if (e === X[t]) {
          X.splice(t, 1);
          break;
        }
      var i = e._output || e;
      return i.disconnect(), r(), e;
    }
    function a(e, n) {
      n = !!n;
      var t = o(e);
      return arguments.length > 1 && t === n ? W : (t ? u(e) : i(e), W);
    }
    function c() {
      for (; X.length; ) X.pop().disconnect();
      return r(), W;
    }
    function s() {
      c(), (e = null), (H = null), (X = []), Z && Z.disconnect(), (Z = null);
    }
    function l(n) {
      return i(new f(e, n));
    }
    function h(n) {
      var t = e.createDynamicsCompressor();
      return (
        (t.update = function(e) {
          (t.threshold.value =
            "undefined" != typeof e.threshold ? e.threshold : -24),
            (t.knee.value = "undefined" != typeof e.knee ? e.knee : 30),
            (t.ratio.value = "undefined" != typeof e.ratio ? e.ratio : 12),
            (t.attack.value = "undefined" != typeof e.attack ? e.attack : 3e-4),
            (t.release.value =
              "undefined" != typeof e.release ? e.release : 0.25);
        }),
        t.update(n || {}),
        i(t)
      );
    }
    function m(n) {
      var t = e.createConvolver();
      return (t.buffer = n), i(t);
    }
    function A(n) {
      var t = e.createDelay();
      return "undefined" != typeof n && (t.delayTime.value = n), i(t);
    }
    function O(n) {
      return i(new v(e, n));
    }
    function E(n) {
      return i(new d(e, n));
    }
    function S(n, t, r, o) {
      return i(new g(e, { type: n, frequency: t, q: r, gain: o }));
    }
    function x(e, n) {
      return S("lowpass", { frequency: e, q: n });
    }
    function L(e, n) {
      return S("highpass", { frequency: e, q: n });
    }
    function _(e, n) {
      return S("bandpass", { frequency: e, q: n });
    }
    function C(e, n) {
      return S("lowshelf", { frequency: e, q: 0, gain: n });
    }
    function k(e, n) {
      return S("highshelf", { frequency: e, q: 0, gain: n });
    }
    function D(e, n, t) {
      return S("peaking", { frequency: e, q: n, gain: t });
    }
    function P(e, n, t) {
      return S("notch", { frequency: e, q: n, gain: t });
    }
    function R(e, n) {
      return S("allpass", { frequency: e, q: n });
    }
    function q(n) {
      return i(new y(e, n));
    }
    function F(n) {
      var t = e.createGain();
      return "undefined" != typeof n && (t.gain.value = n), t;
    }
    function z() {
      return i(new b(e));
    }
    function j(n) {
      return i(new w(e, n));
    }
    function G(n) {
      return i(new T(e, n));
    }
    function B(n, t, r) {
      return i(new M(e, n, t, r));
    }
    function V() {
      var n =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        t = n.bufferSize || 1024,
        r = "undefined" == typeof n.inputChannels ? 0 : n.inputChannels,
        o = "undefined" == typeof n.outputChannels ? 1 : n.outputChannels,
        u = e.createScriptProcessor(t, r, o),
        a = n.thisArg || n.context || u,
        c = n.callback || function() {};
      return (u.onaudioprocess = c.bind(a)), i(u);
    }
    function N(e) {
      return (Z = e), r(), e;
    }
    function I(e) {
      return t(e), e;
    }
    e = e || new p();
    var U = new b(e),
      W = null,
      H = void 0,
      X = [],
      Z = void 0;
    return (
      (W = {
        context: e,
        nodeList: X,
        panning: U,
        has: o,
        add: i,
        remove: u,
        toggle: a,
        removeAll: c,
        destroy: s,
        setSource: N,
        setDestination: I,
        analyser: l,
        compressor: h,
        convolver: m,
        delay: A,
        echo: O,
        distortion: E,
        filter: S,
        lowpass: x,
        highpass: L,
        bandpass: _,
        lowshelf: C,
        highshelf: k,
        peaking: D,
        notch: P,
        allpass: R,
        flanger: q,
        gain: F,
        panner: z,
        phaser: j,
        recorder: G,
        reverb: B,
        script: V
      }),
      Object.freeze(W)
    );
  }
  function O(e, n) {
    function t(e, n) {
      var t = void 0;
      return e || 0 === e
        ? (g.some(function(n) {
            return (n === e || n.id === e) && ((t = n), !0);
          }),
          t && n ? n(t) : t)
        : t;
    }
    function r(e) {
      return (
        t(e, function(e) {
          return g.splice(g.indexOf(e), 1);
        }),
        b
      );
    }
    function o(e) {
      return (
        e.gain.disconnect(),
        e.gain.connect(m),
        g.push(e),
        e.once("destroy", r),
        b
      );
    }
    function i(e, n) {
      return (
        g.forEach(function(t) {
          return t.play(e, n);
        }),
        b
      );
    }
    function u() {
      return (
        g.forEach(function(e) {
          e.playing && e.pause();
        }),
        b
      );
    }
    function a() {
      return (
        g.forEach(function(e) {
          e.paused && e.play();
        }),
        b
      );
    }
    function c() {
      return (
        g.forEach(function(e) {
          return e.stop();
        }),
        b
      );
    }
    function s(e) {
      return (
        g.forEach(function(n) {
          return n.seek(e);
        }),
        b
      );
    }
    function f() {
      return (y = b.volume), (b.volume = 0), b;
    }
    function l() {
      return (b.volume = y || 1), b;
    }
    function d(e) {
      return (b.volume = e), b;
    }
    function v(n, t) {
      if (e) {
        var r = m.gain,
          o = e.currentTime;
        r.cancelScheduledValues(o),
          r.setValueAtTime(r.value, o),
          r.linearRampToValueAtTime(n, o + t);
      } else
        g.forEach(function(e) {
          e.fade(n, t);
        });
      return b;
    }
    function p() {
      for (; g.length; ) g.pop().destroy();
    }
    var g = [],
      h = new A(e),
      m = h.gain(),
      y = 1,
      b = null;
    return (
      e && (h.setSource(m), h.setDestination(n || e.destination)),
      (b = {
        add: o,
        find: t,
        remove: r,
        play: i,
        pause: u,
        resume: a,
        stop: c,
        seek: s,
        setVolume: d,
        mute: f,
        unMute: l,
        fade: v,
        destroy: p
      }),
      Object.defineProperties(b, {
        effect: { value: h },
        gain: { value: m },
        sounds: { value: g },
        volume: {
          get: function() {
            return m.gain.value;
          },
          set: function(n) {
            isNaN(n) ||
              (e
                ? (m.gain.cancelScheduledValues(e.currentTime),
                  (m.gain.value = n),
                  m.gain.setValueAtTime(n, e.currentTime))
                : (m.gain.value = n),
              g.forEach(function(e) {
                e.context || (e.groupVolume = n);
              }));
          }
        }
      }),
      b
    );
  }
  function E() {
    (this._events = this._events || {}),
      (this._maxListeners = this._maxListeners || void 0);
  }
  function S(e) {
    return "function" == typeof e;
  }
  function x(e) {
    return "number" == typeof e;
  }
  function L(e) {
    return "object" == typeof e && null !== e;
  }
  function _(e) {
    return void 0 === e;
  }
  function C(e) {
    function n() {
      g.off("error"),
        g.off("progress"),
        g.off("complete"),
        g.off("loaded"),
        T &&
          "function" == typeof T.removeEventListener &&
          (T.removeEventListener("canplaythrough", a),
          T.removeEventListener("error", o)),
        b &&
          (b.removeEventListener("progress", r),
          b.removeEventListener("load", u),
          b.removeEventListener("error", o));
    }
    function t(e) {
      g.emit("progress", 1), g.emit("loaded", e), g.emit("complete", e), n();
    }
    function r(e) {
      e.lengthComputable && ((h = e.loaded / e.total), g.emit("progress", h));
    }
    function o(t) {
      window.clearTimeout(w);
      var r = t;
      T && T.error && (r = "Media Error: " + p[T.error.code] + " " + e),
        b && (r = "XHR Error: " + b.status + " " + b.statusText + " " + e),
        g.emit("error", r),
        n();
    }
    function i(e) {
      m.decodeAudioData(
        e,
        function(e) {
          (T = e), (b = null), (h = 1), t(e);
        },
        o
      );
    }
    function u() {
      i(b.response);
    }
    function a() {
      window.clearTimeout(w), T && ((h = 1), t(T));
    }
    function c() {
      n(),
        b && 4 !== b.readyState && b.abort(),
        (b = null),
        window.clearTimeout(w);
    }
    function s() {
      c(), (b = null), (T = null), (m = null);
    }
    function f() {
      return e instanceof window.ArrayBuffer
        ? void i(e)
        : ((b = new XMLHttpRequest()),
          b.open("GET", e, !0),
          (b.responseType = "arraybuffer"),
          b.addEventListener("progress", r),
          b.addEventListener("load", u),
          b.addEventListener("error", o),
          void b.send());
    }
    function l() {
      (T && T.tagName) || (T = document.createElement("audio")),
        y ||
          (window.clearTimeout(w),
          (w = window.setTimeout(a, 2e3)),
          T.addEventListener("canplaythrough", a, !1)),
        T.addEventListener("error", o, !1),
        (T.preload = "auto"),
        (T.src = e),
        T.load(),
        y && t(T);
    }
    function d() {
      m ? f() : l();
    }
    function v(n) {
      (e = n), d();
    }
    var p = ["", "ABORTED", "NETWORK", "DECODE", "SRC_NOT_SUPPORTED"],
      g = new se(),
      h = 0,
      m = void 0,
      y = void 0,
      b = void 0,
      w = void 0,
      T = void 0,
      M = {
        on: g.on.bind(g),
        once: g.once.bind(g),
        off: g.off.bind(g),
        load: v,
        start: d,
        cancel: c,
        destroy: s
      };
    return (
      Object.defineProperties(M, {
        data: {
          get: function() {
            return T;
          }
        },
        progress: {
          get: function() {
            return h;
          }
        },
        audioContext: {
          set: function(e) {
            m = e;
          }
        },
        isTouchLocked: {
          set: function(e) {
            y = e;
          }
        }
      }),
      Object.freeze(M)
    );
  }
  function k(e, n, t) {
    function r() {
      return !m && n && ((m = n.createBufferSource()), (m.buffer = e)), m;
    }
    function o() {
      if (m) {
        m.onended = null;
        try {
          m.disconnect(), m.stop(0);
        } catch (e) {}
        m = null;
      }
      (v = !1), (p = 0), (h = !1), (y = 0);
    }
    function i() {
      var e = n.currentTime - y;
      o(), (p = e), (h = !1), (v = !0);
    }
    function u() {
      o(), (f = !0), "function" == typeof l && l(s);
    }
    function a(e) {
      var t =
        arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
      if (!h) {
        for (
          e = e ? n.currentTime + e : 0, t && (p = 0), p && (t = p);
          t > s.duration;

        )
          t %= s.duration;
        r(),
          (m.onended = u),
          m.start(e, t),
          (m.loop = d),
          (m.playbackRate.value = g),
          (y = n.currentTime - t),
          (f = !1),
          (v = !1),
          (p = 0),
          (h = !0);
      }
    }
    function c() {
      o(), (e = null), (n = null), (l = null), (m = null);
    }
    var s = {},
      f = !1,
      l = t,
      d = !1,
      v = !1,
      p = 0,
      g = 1,
      h = !1,
      m = null,
      y = 0;
    return (
      Object.defineProperties(s, {
        play: { value: a },
        pause: { value: i },
        stop: { value: o },
        destroy: { value: c },
        currentTime: {
          get: function() {
            if (p) return p;
            if (y) {
              var e = n.currentTime - y;
              return e > s.duration && (e %= s.duration), e;
            }
            return 0;
          }
        },
        duration: {
          get: function() {
            return e ? e.duration : 0;
          }
        },
        ended: {
          get: function() {
            return f;
          }
        },
        loop: {
          get: function() {
            return d;
          },
          set: function(e) {
            (d = !!e), m && (m.loop = d);
          }
        },
        paused: {
          get: function() {
            return v;
          }
        },
        playbackRate: {
          get: function() {
            return g;
          },
          set: function(e) {
            (g = e), m && (m.playbackRate.value = g);
          }
        },
        playing: {
          get: function() {
            return h;
          }
        },
        progress: {
          get: function() {
            return s.duration ? s.currentTime / s.duration : 0;
          }
        },
        sourceNode: {
          get: function() {
            return r();
          }
        }
      }),
      Object.freeze(s)
    );
  }
  function D(e, n, t) {
    function r() {
      return !T && n && (T = n.createMediaElementSource(e)), T;
    }
    function o(n) {
      (e.src = n), e.load(), (v = !1), (y = !1), (w = !1);
    }
    function i() {
      e.removeEventListener("canplaythrough", i), w && e.play();
    }
    function u() {
      return m
        ? ((e.currentTime = 0), e.currentTime > 0 && e.load(), void e.play())
        : ((v = !0), (y = !1), (w = !1), void ("function" == typeof p && p(d)));
    }
    function a(n, t) {
      clearTimeout(g),
        (e.volume = A * M),
        (e.playbackRate = b),
        t && (e.currentTime = t),
        n ? (g = setTimeout(a, n)) : e.play(),
        (v = !1),
        (y = !1),
        (w = !0),
        e.removeEventListener("ended", u),
        e.addEventListener("ended", u, !1),
        e.readyState < 1 &&
          (e.removeEventListener("canplaythrough", i),
          e.addEventListener("canplaythrough", i, !1),
          e.load(),
          e.play());
    }
    function c() {
      clearTimeout(g), e && (e.pause(), (w = !1), (y = !0));
    }
    function s() {
      if ((clearTimeout(g), e)) {
        e.pause();
        try {
          (e.currentTime = 0), e.currentTime > 0 && e.load();
        } catch (e) {}
        (w = !1), (y = !1);
      }
    }
    function f(e, t) {
      function r(e, n) {
        h = window.setTimeout(function() {
          return (
            (d.volume = d.volume + 0.2 * (e - d.volume)),
            Math.abs(d.volume - e) > 0.05 ? void r(e, n) : void (d.volume = e)
          );
        }, 1e3 * n);
      }
      return n ? d : (window.clearTimeout(h), r(e, t / 10), d);
    }
    function l() {
      e.removeEventListener("ended", u),
        e.removeEventListener("canplaythrough", i),
        s(),
        (e = null),
        (n = null),
        (p = null),
        (T = null);
    }
    var d = {},
      v = !1,
      p = t,
      g = void 0,
      h = void 0,
      m = !1,
      y = !1,
      b = 1,
      w = !1,
      T = null,
      M = 1,
      A = 1;
    return (
      Object.defineProperties(d, {
        play: { value: a },
        pause: { value: c },
        stop: { value: s },
        load: { value: o },
        fade: { value: f },
        destroy: { value: l },
        currentTime: {
          get: function() {
            return e ? e.currentTime : 0;
          }
        },
        duration: {
          get: function() {
            return e ? e.duration : 0;
          }
        },
        ended: {
          get: function() {
            return v;
          }
        },
        loop: {
          get: function() {
            return m;
          },
          set: function(e) {
            m = !!e;
          }
        },
        paused: {
          get: function() {
            return y;
          }
        },
        playbackRate: {
          get: function() {
            return b;
          },
          set: function(n) {
            (b = n), e && (e.playbackRate = b);
          }
        },
        playing: {
          get: function() {
            return w;
          }
        },
        progress: {
          get: function() {
            return e && e.duration ? e.currentTime / e.duration : 0;
          }
        },
        sourceNode: {
          get: function() {
            return r();
          }
        },
        volume: {
          get: function() {
            return A;
          },
          set: function(n) {
            window.clearTimeout(h), (A = n), e && (e.volume = A * M);
          }
        },
        groupVolume: {
          get: function() {
            return M;
          },
          set: function(n) {
            (M = n), e && (e.volume = A * M);
          }
        }
      }),
      Object.freeze(d)
    );
  }
  function P(e, n) {
    function t() {
      return (
        !l &&
          n &&
          ((l = n.createMediaStreamSource(e)),
          navigator.mozGetUserMedia && (window.mozHack = l)),
        l
      );
    }
    function r(e) {
      (e = e ? n.currentTime + e : 0),
        t(),
        l.start(e),
        (d = n.currentTime - s),
        (a = !1),
        (f = !0),
        (c = !1),
        (s = 0);
    }
    function o() {
      if (l) {
        try {
          l.stop(0);
        } catch (e) {}
        l = null;
      }
      (a = !0), (c = !1), (s = 0), (f = !1), (d = 0);
    }
    function i() {
      var e = n.currentTime - d;
      o(), (s = e), (f = !1), (c = !0);
    }
    function u() {
      o(), (n = null), (l = null), (e = null), (window.mozHack = null);
    }
    var a = !1,
      c = !1,
      s = 0,
      f = !1,
      l = null,
      d = 0,
      v = { play: r, pause: i, stop: o, destroy: u, duration: 0, progress: 0 };
    return (
      Object.defineProperties(v, {
        currentTime: {
          get: function() {
            return s ? s : d ? n.currentTime - d : 0;
          }
        },
        ended: {
          get: function() {
            return a;
          }
        },
        paused: {
          get: function() {
            return c;
          }
        },
        playing: {
          get: function() {
            return f;
          }
        },
        sourceNode: {
          get: function() {
            return t();
          }
        }
      }),
      Object.freeze(v)
    );
  }
  function R(e, n) {
    function t() {
      return (
        !l &&
          n &&
          ((l = n.createOscillator()), (l.type = e), (l.frequency.value = v)),
        l
      );
    }
    function r(e) {
      (e = e || 0),
        e && (e = n.currentTime + e),
        t(),
        l.start(e),
        (d = s ? n.currentTime - s : n.currentTime),
        (a = !1),
        (f = !0),
        (c = !1),
        (s = 0);
    }
    function o() {
      if (l) {
        try {
          l.stop(0);
        } catch (e) {}
        l = null;
      }
      (a = !0), (c = !1), (s = 0), (f = !1), (d = 0);
    }
    function i() {
      var e = n.currentTime - d;
      o(), (s = e), (f = !1), (c = !0);
    }
    function u() {
      o(), (n = null), (l = null);
    }
    var a = !1,
      c = !1,
      s = 0,
      f = !1,
      l = null,
      d = 0,
      v = 200,
      p = null;
    return (
      (p = { play: r, pause: i, stop: o, destroy: u }),
      Object.defineProperties(p, {
        currentTime: {
          get: function() {
            return s ? s : d ? n.currentTime - d : 0;
          }
        },
        duration: { value: 0 },
        ended: {
          get: function() {
            return a;
          }
        },
        frequency: {
          get: function() {
            return v;
          },
          set: function(e) {
            (v = e), l && (l.frequency.value = e);
          }
        },
        paused: {
          get: function() {
            return c;
          }
        },
        playing: {
          get: function() {
            return f;
          }
        },
        progress: { value: 0 },
        sourceNode: {
          get: function() {
            return t();
          }
        }
      }),
      Object.freeze(p)
    );
  }
  function q(e, n) {
    function t() {
      return !g && n && (g = n.createScriptProcessor(c, 0, s)), g;
    }
    function r() {
      t(),
        (g.onaudioprocess = l),
        (h = n.currentTime - v),
        (f = !1),
        (d = !1),
        (v = 0),
        (p = !0);
    }
    function o(e) {
      for (var n = e.outputBuffer, t = 0; t < n.numberOfChannels; t++)
        for (var r = n.getChannelData(t), o = 0; o < r.length; o++) r[o] = 0;
    }
    function i() {
      g && (g.onaudioprocess = o),
        (f = !0),
        (d = !1),
        (v = 0),
        (p = !1),
        (h = 0);
    }
    function u() {
      var e = n.currentTime - h;
      i(), (v = e), (p = !1), (d = !0);
    }
    function a() {
      i(), (n = null), (l = null), (g = null);
    }
    var c = e.bufferSize || 1024,
      s = e.channels || 1,
      f = !1,
      l = e.callback.bind(e.thisArg || this),
      d = !1,
      v = 0,
      p = !1,
      g = null,
      h = 0,
      m = null;
    return (
      (m = {
        play: r,
        pause: u,
        stop: i,
        destroy: a,
        duration: 0,
        progress: 0
      }),
      Object.defineProperties(m, {
        currentTime: {
          get: function() {
            return v ? v : h ? n.currentTime - h : 0;
          }
        },
        ended: {
          get: function() {
            return f;
          }
        },
        paused: {
          get: function() {
            return d;
          }
        },
        playing: {
          get: function() {
            return p;
          }
        },
        sourceNode: {
          get: function() {
            return t();
          }
        }
      }),
      Object.freeze(m)
    );
  }
  function F() {
    var e = void 0,
      n = void 0;
    return function(t, r) {
      if (!window.Float32Array || !window.AudioBuffer) return [];
      var o = e === t,
        i = n && n.length === r;
      if (o && i) return n;
      if (((n && n.length === r) || (n = new Float32Array(r)), !t)) return n;
      e = t;
      for (
        var u = Math.floor(e.length / r),
          a = 5,
          c = Math.max(Math.floor(u / a), 1),
          s = 0,
          f = 0;
        f < e.numberOfChannels;
        f++
      )
        for (var l = e.getChannelData(f), d = 0; d < r; d++)
          for (var v = d * u, p = v + u; v < p; v += c) {
            var g = l[v];
            g < 0 && (g = -g), g > n[d] && (n[d] = g), g > s && (s = g);
          }
      for (var h = 1 / s, m = 0; m < n.length; m++) n[m] *= h;
      return n;
    };
  }
  function z(e, n) {
    function t(n) {
      if (((l = n), ie.isAudioBuffer(l)))
        w = new k(l, e, function() {
          return T.emit("ended", T);
        });
      else if (ie.isMediaElement(l))
        w = new D(l, e, function() {
          return T.emit("ended", T);
        });
      else if (ie.isMediaStream(l)) w = new P(l, e);
      else if (ie.isOscillatorType((l && l.type) || l))
        w = new R(l.type || l, e);
      else {
        if (!ie.isScriptConfig(l))
          throw new Error("Cannot detect data type: " + l);
        w = new q(l, e);
      }
      d.setSource(w.sourceNode), T.emit("ready", T), b && b();
    }
    function r(n) {
      var r = ie.getSupportedFile(n.src || n.url || n.data || n);
      return (
        w && l && l.tagName
          ? w.load(r)
          : ((h = h || new C(r)),
            (h.audioContext = n.asMediaElement ? null : e),
            (h.isTouchLocked = g),
            h.once("loaded", function(e) {
              t(e), T.emit("loaded", T);
            })),
        T
      );
    }
    function o(n, t) {
      return !w || g
        ? ((b = function() {
            w && o(n, t);
          }),
          T)
        : ((b = null),
          d.setSource(w.sourceNode),
          e || (T.volume = v.gain.value),
          w.play(n, t),
          w.hasOwnProperty("loop") && (w.loop = m),
          T.emit("play", T),
          T);
    }
    function i() {
      return w && w.pause(), T.emit("pause", T), T;
    }
    function u(e) {
      return w && w.stop(e || 0), T.emit("stop", T), T;
    }
    function a(e) {
      return w && (w.stop(), o(0, w.duration * e)), T;
    }
    function c(n, t) {
      if (!w) return T;
      var r = v.gain;
      if (e) {
        var o = e.currentTime;
        r.cancelScheduledValues(o),
          r.setValueAtTime(r.value, o),
          r.linearRampToValueAtTime(n, o + t);
      } else "function" == typeof w.fade && (w.fade(n, t), (r.value = n));
      return T;
    }
    function s() {
      w && w.destroy(),
        d && d.destroy(),
        v && v.disconnect(),
        h && h.destroy(),
        T.off("loaded"),
        T.off("ended"),
        (v = null),
        (e = null),
        (l = null),
        (b = null),
        (w = null),
        (d = null),
        (h = null),
        (p = null),
        T.emit("destroy", T),
        T.off("destroy");
    }
    var f = void 0,
      l = void 0,
      d = new A(e),
      v = d.gain(),
      p = F(),
      g = !1,
      h = void 0,
      m = !1,
      y = 1,
      b = void 0,
      w = void 0,
      T = null;
    return (
      e && (d.setDestination(v), v.connect(n || e.destination)),
      (T = Object.create(se.prototype, {
        _events: { value: {} },
        constructor: { value: z },
        play: { value: o },
        pause: { value: i },
        load: { value: r },
        seek: { value: a },
        stop: { value: u },
        fade: { value: c },
        destroy: { value: s },
        context: { value: e },
        currentTime: {
          get: function() {
            return w ? w.currentTime : 0;
          },
          set: function(e) {
            w && w.stop(), o(0, e);
          }
        },
        data: {
          get: function() {
            return l;
          },
          set: function(e) {
            e && t(e);
          }
        },
        duration: {
          get: function() {
            return w ? w.duration : 0;
          }
        },
        effect: { value: d },
        ended: {
          get: function() {
            return !!w && w.ended;
          }
        },
        frequency: {
          get: function() {
            return w ? w.frequency : 0;
          },
          set: function(e) {
            w && w.hasOwnProperty("frequency") && (w.frequency = e);
          }
        },
        gain: { value: v },
        id: {
          get: function() {
            return f;
          },
          set: function(e) {
            f = e;
          }
        },
        isTouchLocked: {
          set: function(e) {
            (g = e), h && (h.isTouchLocked = e), !e && b && b();
          }
        },
        loader: {
          get: function() {
            return h;
          }
        },
        loop: {
          get: function() {
            return m;
          },
          set: function(e) {
            (m = !!e),
              w && w.hasOwnProperty("loop") && w.loop !== m && (w.loop = m);
          }
        },
        paused: {
          get: function() {
            return !!w && w.paused;
          }
        },
        playing: {
          get: function() {
            return !!w && w.playing;
          }
        },
        playbackRate: {
          get: function() {
            return y;
          },
          set: function(e) {
            (y = e), w && (w.playbackRate = y);
          }
        },
        progress: {
          get: function() {
            return w ? w.progress : 0;
          }
        },
        sourceNode: {
          get: function() {
            return w ? w.sourceNode : null;
          }
        },
        volume: {
          get: function() {
            return e
              ? v.gain.value
              : w && w.hasOwnProperty("volume")
              ? w.volume
              : 1;
          },
          set: function(n) {
            if (!isNaN(n)) {
              var t = v.gain;
              if (e) {
                var r = e.currentTime;
                t.cancelScheduledValues(r),
                  (t.value = n),
                  t.setValueAtTime(n, r);
              } else
                (t.value = n),
                  w && w.hasOwnProperty("volume") && (w.volume = n);
            }
          }
        },
        groupVolume: {
          get: function() {
            return w.groupVolume;
          },
          set: function(e) {
            w && w.hasOwnProperty("groupVolume") && (w.groupVolume = e);
          }
        },
        waveform: {
          value: function(e) {
            return (
              l ||
                T.once("ready", function() {
                  return p(l, e);
                }),
              p(l, e)
            );
          }
        },
        userData: { value: {} }
      })),
      Object.freeze(T)
    );
  }
  function j(e, n) {
    function t() {
      o.length &&
        (a = o.slice(0).sort(function(e, n) {
          return n.duration - e.duration;
        })[0]);
    }
    var r = new O(e, n),
      o = r.sounds,
      i = 1,
      u = !1,
      a = void 0,
      c = r.add;
    r.add = function(e) {
      return c(e), t(), r;
    };
    var s = r.rmeove;
    return (
      (r.remove = function(e) {
        return s(e), t(), r;
      }),
      Object.defineProperties(r, {
        currentTime: {
          get: function() {
            return a ? a.currentTime : 0;
          },
          set: function(e) {
            this.stop(), this.play(0, e);
          }
        },
        duration: {
          get: function() {
            return a ? a.duration : 0;
          }
        },
        loop: {
          get: function() {
            return u;
          },
          set: function(e) {
            (u = !!e),
              o.forEach(function(e) {
                e.loop = u;
              });
          }
        },
        paused: {
          get: function() {
            return !!a && a.paused;
          }
        },
        progress: {
          get: function() {
            return a ? a.progress : 0;
          }
        },
        playbackRate: {
          get: function() {
            return i;
          },
          set: function(e) {
            (i = e),
              o.forEach(function(e) {
                e.playbackRate = i;
              });
          }
        },
        playing: {
          get: function() {
            return !!a && a.playing;
          }
        }
      }),
      r
    );
  }
  function G(e, n, t) {
    function r() {
      return i
        ? (navigator.getUserMedia(
            { audio: !0 },
            function(n) {
              (a = n), e(a);
            },
            function(e) {
              (n && "PermissionDeniedError" === e.name) ||
              "PERMISSION_DENIED" === e
                ? n()
                : t(e.message || e);
            }
          ),
          u)
        : u;
    }
    function o() {
      return a && (a.stop(), (a = null)), u;
    }
    (navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia),
      (t = t || function() {});
    var i = !!navigator.getUserMedia,
      u = {},
      a = null;
    return (
      Object.defineProperties(u, {
        connect: { value: r },
        disconnect: { value: o },
        isSupported: { value: i },
        stream: {
          get: function() {
            return a;
          }
        }
      }),
      Object.freeze(u)
    );
  }
  function B(e) {
    function n() {
      s ? ((y.fillStyle = s), y.fillRect(d, v, h, m)) : y.clearRect(d, v, h, m),
        (y.lineWidth = f),
        (b = null),
        "function" != typeof c && ((y.strokeStyle = c), y.beginPath());
    }
    function t(e, n, t) {
      if ("function" == typeof c) {
        var r = c(e, n, t);
        r !== b && ((b = r), y.stroke(), (y.strokeStyle = b), y.beginPath());
      }
    }
    function r(e, n, t) {
      return "function" == typeof p ? p(e, n, t) : e;
    }
    function o(n, t) {
      return n && "function" == typeof n.waveform
        ? n.waveform(t)
        : n
        ? n
        : e.waveform
        ? e.waveform
        : e.sound
        ? e.sound.waveform(t)
        : null;
    }
    function i(e) {
      if ((n(), "circular" === a)) {
        var i = o(e, 360),
          c = Math.floor(i.length * l),
          s = le / c,
          p = void 0,
          g = void 0,
          b = void 0,
          x = void 0;
        for (w = 0; w < c; w++) {
          var L = r(i[w], w, c);
          t(w, c, L),
            (p = w * s - fe),
            (x = Math.cos(p)),
            (b = Math.sin(p)),
            "fill" === u && ((T = E + O * x), (M = S + O * b), y.moveTo(T, M)),
            (g = O + (A - O) * L),
            (T = E + g * x),
            (M = S + g * b),
            "line" === u && 0 === w && y.moveTo(T, M),
            y.lineTo(T, M);
        }
        "line" === u && y.closePath();
      } else {
        var _ = o(e, h),
          C = Math.min(_.length, h - f / 2);
        for (C = Math.floor(C * l), w = 0; w < C; w++) {
          var k = r(_[w], w, C);
          t(w, C, k),
            "line" === u && w > 0 && y.lineTo(T, M),
            (T = d + w),
            (M = v + m - Math.round(m * k)),
            (M = Math.floor(Math.min(M, v + m - f / 2))),
            "fill" === u
              ? (y.moveTo(T, M), y.lineTo(T, v + m))
              : y.lineTo(T, M);
        }
      }
      y.stroke();
    }
    var u = e.style || "fill",
      a = e.shape || "linear",
      c = e.color || 0,
      s = e.bgColor,
      f = e.lineWidth || 1,
      l = e.percent || 1,
      d = e.x || 0,
      v = e.y || 0,
      p = e.transform,
      g = e.canvas,
      h = e.width || (g && g.width),
      m = e.height || (g && g.height),
      y = null,
      b = void 0,
      w = void 0,
      T = void 0,
      M = void 0,
      A = void 0,
      O = void 0,
      E = void 0,
      S = void 0;
    return (
      g ||
        e.context ||
        ((g = document.createElement("canvas")),
        (h = h || g.width),
        (m = m || g.height),
        (g.width = m),
        (g.height = m)),
      "circular" === a &&
        ((A = e.radius || Math.min(m / 2, h / 2)),
        (O = e.innerRadius || A / 2),
        (E = d + h / 2),
        (S = v + m / 2)),
      (y = e.context || g.getContext("2d")),
      (i.canvas = g),
      (e.waveform || e.sound) && i(),
      i
    );
  }
  function V() {
    if (de) return de;
    var e = window.AudioContext || window.webkitAudioContext;
    de = e ? new e() : null;
    var n = de && "suspended" === de.state;
    return (
      n &&
        "function" == typeof de.resume &&
        window.setTimeout(function() {
          de.resume();
        }, 1e3),
      de
    );
  }
  function N(e, n, t) {
    if (ve) return ve;
    (e = e || 2), (t = t || 44100), (n = t || e);
    var r = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    return (ve = r ? new r(e, n, t) : null);
  }
  function I(e) {
    if (!de) return e;
    for (
      var n = e.numberOfChannels,
        t = de.createBuffer(n, e.length, e.sampleRate),
        r = 0;
      r < n;
      r++
    )
      t.getChannelData(r).set(e.getChannelData(r));
    return t;
  }
  function U(e) {
    for (var n = e.numberOfChannels, t = 0; t < n; t++)
      Array.prototype.reverse.call(e.getChannelData(t));
    return e;
  }
  function W(e, n, t, r, o) {
    de &&
      (e.setValueAtTime(n, de.currentTime),
      o
        ? e.linearRampToValueAtTime(t, de.currentTime + r)
        : e.exponentialRampToValueAtTime(t, de.currentTime + r));
  }
  function H(e) {
    if (!de) return 0;
    var n = 40,
      t = de.sampleRate / 2,
      r = Math.log(t / n) / Math.LN2,
      o = Math.pow(2, r * (e - 1));
    return t * o;
  }
  function X(e, n, t) {
    return new G(e, n, t);
  }
  function Z(e) {
    var n =
        arguments.length <= 1 || void 0 === arguments[1] ? ":" : arguments[1],
      t = Math.floor(e / 60),
      r = Math.floor((e % 3600) % 60),
      o = (t < 10 ? "0" + t : t) + n,
      i = r < 10 ? "0" + r : r;
    return o + i;
  }
  function Q() {
    function e(e) {
      return T.find(e);
    }
    function n(e) {
      var n = new j(b, T.gain);
      return (
        e &&
          e.forEach(function(e) {
            return n.add(e);
          }),
        n
      );
    }
    function t(e) {
      var n = e && e.webAudio === !1 ? null : b,
        t = new z(n, T.gain);
      return (
        (t.isTouchLocked = A),
        e &&
          ((t.id = e.id || e.name || ""),
          (t.loop = !!e.loop),
          (t.volume = e.volume)),
        T.add(t),
        t
      );
    }
    function r(e, n) {
      var r = t(e).load(e);
      return n && n.add(r.loader), r;
    }
    function o(e) {
      var n = e.src || e.url || e.data || e,
        t = void 0,
        o = void 0;
      if (ie.containsURL(n)) (t = r(e)), (o = t.loader);
      else {
        if (!Array.isArray(n) || !ie.containsURL(n[0].src || n[0].url)) {
          var i = "sono.load: No audio file URLs found in config.";
          if (!e.onError) throw new Error(i);
          return e.onError("[ERROR] " + i), null;
        }
        (t = []),
          (o = new C.Group()),
          n.forEach(function(e) {
            return t.push(r(e, o));
          });
      }
      return (
        e.onProgress &&
          o.on("progress", function(n) {
            return e.onProgress(n);
          }),
        e.onComplete &&
          o.once("complete", function() {
            o.off("progress"), e.onComplete(t);
          }),
        o.once("error", function(n) {
          o.off("error"),
            e.onError
              ? e.onError(n)
              : console.error.call(console, "[ERROR] sono.load: " + n);
        }),
        o.start(),
        t
      );
    }
    function i(e) {
      if (ie.containsURL(e)) return o(e);
      var n = t(e);
      return (n.data = e.data || e), n;
    }
    function u(e) {
      return (
        T.find(e, function(e) {
          return e.destroy();
        }),
        M
      );
    }
    function a() {
      return T.destroy(), M;
    }
    function c() {
      return T.mute(), M;
    }
    function s() {
      return T.unMute(), M;
    }
    function f(e, n) {
      return T.fade(e, n), M;
    }
    function l() {
      return T.pause(), M;
    }
    function d() {
      return T.resume(), M;
    }
    function v() {
      return T.stop(), M;
    }
    function p(e, n, t) {
      return (
        T.find(e, function(e) {
          return e.play(n, t);
        }),
        M
      );
    }
    function g(e) {
      return (
        T.find(e, function(e) {
          return e.pause();
        }),
        M
      );
    }
    function h(e) {
      return (
        T.find(e, function(e) {
          return e.stop();
        }),
        M
      );
    }
    function m() {
      var e = "sono " + y,
        n =
          "Supported:" +
          M.isSupported +
          " WebAudioAPI:" +
          M.hasWebAudio +
          " TouchLocked:" +
          A +
          " State:" +
          (b && b.state) +
          " Extensions:" +
          ie.extensions;
      if (navigator.userAgent.indexOf("Chrome") > -1) {
        var t = [
          "%c ♫ " + e + " ♫ %c " + n + " ",
          "color: #FFFFFF; background: #379F7A",
          "color: #1F1C0D; background: #E0FBAC"
        ];
        console.log.apply(console, t);
      } else window.console && window.console.log.call && console.log.call(console, e + " " + n);
    }
    var y = "0.1.8",
      b = pe.getContext(),
      w = b ? b.destination : null,
      T = new O(b, w),
      M = null,
      A = !1;
    return (
      (A = K.handleTouchLock(b, function() {
        (A = !1),
          T.sounds.forEach(function(e) {
            return (e.isTouchLocked = !1);
          });
      })),
      (function() {
        function e() {
          T.sounds.forEach(function(e) {
            e.playing && (e.pause(), t.push(e));
          });
        }
        function n() {
          for (; t.length; ) t.pop().play();
        }
        var t = [];
        K.handlePageVisibility(e, n);
      })(),
      (M = {
        createSound: i,
        destroySound: u,
        destroyAll: a,
        getSound: e,
        createGroup: n,
        file: ie,
        load: o,
        mute: c,
        unMute: s,
        fade: f,
        pauseAll: l,
        resumeAll: d,
        stopAll: v,
        play: p,
        pause: g,
        stop: h,
        log: m,
        canPlay: ie.canPlay,
        context: b,
        getOfflineContext: pe.getOfflineContext,
        effect: T.effect,
        extensions: ie.extensions,
        hasWebAudio: !!b,
        isSupported: ie.extensions.length > 0,
        gain: T.gain,
        utils: pe,
        VERSION: y,
        Sound: z,
        Group: O
      }),
      Object.defineProperties(M, {
        isTouchLocked: {
          get: function() {
            return A;
          }
        },
        sounds: {
          get: function() {
            return T.sounds.slice(0);
          }
        },
        volume: {
          get: function() {
            return T.volume;
          },
          set: function(e) {
            T.volume = e;
          }
        }
      }),
      Object.freeze(M)
    );
  }
  var K = {};
  (K.handlePageVisibility = function(e, n) {
    function t() {
      document[r] ? e() : n();
    }
    var r = void 0,
      o = void 0;
    "undefined" != typeof document.hidden
      ? ((r = "hidden"), (o = "visibilitychange"))
      : "undefined" != typeof document.mozHidden
      ? ((r = "mozHidden"), (o = "mozvisibilitychange"))
      : "undefined" != typeof document.msHidden
      ? ((r = "msHidden"), (o = "msvisibilitychange"))
      : "undefined" != typeof document.webkitHidden &&
        ((r = "webkitHidden"), (o = "webkitvisibilitychange")),
      "undefined" != typeof o && document.addEventListener(o, t, !1);
  }),
    (K.handleTouchLock = function(e, n) {
      function t() {
        e && "suspended" === e.state
          ? e.resume().then(function() {
              var r = e.createBuffer(1, 1, 22050),
                o = e.createBufferSource();
              (o.buffer = r),
                o.connect(e.destination),
                o.start(0),
                o.stop(0),
                o.disconnect(),
                document.body.removeEventListener("touchend", t),
                n();
            })
          : (document.body.removeEventListener("touchend", t), n());
      }
      var r = navigator.userAgent,
        o = !!r.match(
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|SymbianOS/i
        );
      return o && document.body.addEventListener("touchend", t, !1), o;
    });
  var J =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol
              ? "symbol"
              : typeof e;
          },
    Y = function(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    },
    $ = function(e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof n
        );
      (e.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        n &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, n)
            : (e.__proto__ = n));
    },
    ee = function(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
    },
    ne = [],
    te = {},
    re = [
      { ext: "ogg", type: 'audio/ogg; codecs="vorbis"' },
      { ext: "mp3", type: "audio/mpeg;" },
      { ext: "opus", type: 'audio/ogg; codecs="opus"' },
      { ext: "wav", type: 'audio/wav; codecs="1"' },
      { ext: "m4a", type: "audio/x-m4a;" },
      { ext: "m4a", type: "audio/aac;" }
    ],
    oe = document.createElement("audio");
  oe &&
    (re.forEach(function(e) {
      var n = !!oe.canPlayType(e.type);
      n && ne.indexOf(e.ext) === -1 && ne.push(e.ext), (te[e.ext] = n);
    }),
    (oe = null));
  var ie = {
      canPlay: te,
      containsURL: s,
      extensions: ne,
      getFileExtension: e,
      getSupportedFile: n,
      isAudioBuffer: t,
      isMediaElement: o,
      isMediaStream: i,
      isOscillatorType: u,
      isScriptConfig: a,
      isURL: c
    },
    ue = 22050;
  (b.defaults = {
    panningModel: "HRTF",
    distanceModel: "linear",
    refDistance: 1,
    maxDistance: 1e3,
    rolloffFactor: 1,
    coneInnerAngle: 360,
    coneOuterAngle: 0,
    coneOuterGain: 0
  }),
    (O.Effect = A);
  var ae = E;
  (E.EventEmitter = E),
    (E.prototype._events = void 0),
    (E.prototype._maxListeners = void 0),
    (E.defaultMaxListeners = 10),
    (E.prototype.setMaxListeners = function(e) {
      if (!x(e) || e < 0 || isNaN(e))
        throw TypeError("n must be a positive number");
      return (this._maxListeners = e), this;
    }),
    (E.prototype.emit = function(e) {
      var n, t, r, o, i, u;
      if (
        (this._events || (this._events = {}),
        "error" === e &&
          (!this._events.error ||
            (L(this._events.error) && !this._events.error.length)))
      ) {
        if (((n = arguments[1]), n instanceof Error)) throw n;
        var a = new Error('Uncaught, unspecified "error" event. (' + n + ")");
        throw ((a.context = n), a);
      }
      if (((t = this._events[e]), _(t))) return !1;
      if (S(t))
        switch (arguments.length) {
          case 1:
            t.call(this);
            break;
          case 2:
            t.call(this, arguments[1]);
            break;
          case 3:
            t.call(this, arguments[1], arguments[2]);
            break;
          default:
            (o = Array.prototype.slice.call(arguments, 1)), t.apply(this, o);
        }
      else if (L(t))
        for (
          o = Array.prototype.slice.call(arguments, 1),
            u = t.slice(),
            r = u.length,
            i = 0;
          i < r;
          i++
        )
          u[i].apply(this, o);
      return !0;
    }),
    (E.prototype.addListener = function(e, n) {
      var t;
      if (!S(n)) throw TypeError("listener must be a function");
      return (
        this._events || (this._events = {}),
        this._events.newListener &&
          this.emit("newListener", e, S(n.listener) ? n.listener : n),
        this._events[e]
          ? L(this._events[e])
            ? this._events[e].push(n)
            : (this._events[e] = [this._events[e], n])
          : (this._events[e] = n),
        L(this._events[e]) &&
          !this._events[e].warned &&
          ((t = _(this._maxListeners)
            ? E.defaultMaxListeners
            : this._maxListeners),
          t &&
            t > 0 &&
            this._events[e].length > t &&
            ((this._events[e].warned = !0),
            "function" == typeof console.trace)),
        this
      );
    }),
    (E.prototype.on = E.prototype.addListener),
    (E.prototype.once = function(e, n) {
      function t() {
        this.removeListener(e, t), r || ((r = !0), n.apply(this, arguments));
      }
      if (!S(n)) throw TypeError("listener must be a function");
      var r = !1;
      return (t.listener = n), this.on(e, t), this;
    }),
    (E.prototype.removeListener = function(e, n) {
      var t, r, o, i;
      if (!S(n)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[e]) return this;
      if (
        ((t = this._events[e]),
        (o = t.length),
        (r = -1),
        t === n || (S(t.listener) && t.listener === n))
      )
        delete this._events[e],
          this._events.removeListener && this.emit("removeListener", e, n);
      else if (L(t)) {
        for (i = o; i-- > 0; )
          if (t[i] === n || (t[i].listener && t[i].listener === n)) {
            r = i;
            break;
          }
        if (r < 0) return this;
        1 === t.length
          ? ((t.length = 0), delete this._events[e])
          : t.splice(r, 1),
          this._events.removeListener && this.emit("removeListener", e, n);
      }
      return this;
    }),
    (E.prototype.removeAllListeners = function(e) {
      var n, t;
      if (!this._events) return this;
      if (!this._events.removeListener)
        return (
          0 === arguments.length
            ? (this._events = {})
            : this._events[e] && delete this._events[e],
          this
        );
      if (0 === arguments.length) {
        for (n in this._events)
          "removeListener" !== n && this.removeAllListeners(n);
        return (
          this.removeAllListeners("removeListener"), (this._events = {}), this
        );
      }
      if (((t = this._events[e]), S(t))) this.removeListener(e, t);
      else if (t) for (; t.length; ) this.removeListener(e, t[t.length - 1]);
      return delete this._events[e], this;
    }),
    (E.prototype.listeners = function(e) {
      var n;
      return (n =
        this._events && this._events[e]
          ? S(this._events[e])
            ? [this._events[e]]
            : this._events[e].slice()
          : []);
    }),
    (E.prototype.listenerCount = function(e) {
      if (this._events) {
        var n = this._events[e];
        if (S(n)) return 1;
        if (n) return n.length;
      }
      return 0;
    }),
    (E.listenerCount = function(e, n) {
      return e.listenerCount(n);
    });
  var ce = ae.EventEmitter,
    se = (function(e) {
      function n() {
        return Y(this, n), ee(this, e.call(this));
      }
      return (
        $(n, e),
        (n.prototype.off = function(e, n) {
          return n
            ? this.removeListener(e, n)
            : e
            ? this.removeAllListeners(e)
            : this.removeAllListeners();
        }),
        n
      );
    })(ce);
  (C.Group = function() {
    function e(e) {
      var n = s + e;
      a.emit("progress", n / f);
    }
    function n() {
      s++, o(), a.emit("progress", s / f), r();
    }
    function t(e) {
      console.error.call(console, e), o(), a.emit("error", e), r();
    }
    function r() {
      return 0 === c.length
        ? ((l = null), void a.emit("complete"))
        : ((l = c.pop()),
          l.on("progress", e),
          l.once("loaded", n),
          l.once("error", t),
          void l.start());
    }
    function o() {
      l.off("progress", e), l.off("loaded", n), l.off("error", t);
    }
    function i(e) {
      return c.push(e), f++, e;
    }
    function u() {
      (f = c.length), r();
    }
    var a = new se(),
      c = [],
      s = 0,
      f = 0,
      l = void 0;
    return Object.freeze({
      on: a.on.bind(a),
      once: a.once.bind(a),
      off: a.off.bind(a),
      add: i,
      start: u
    });
  }),
    (z.__source = {
      BufferSource: k,
      MediaSource: D,
      MicrophoneSource: P,
      OscillatorSource: R,
      ScriptSource: q
    });
  var fe = Math.PI / 2,
    le = 2 * Math.PI,
    de = void 0,
    ve = void 0,
    pe = Object.freeze({
      getContext: V,
      getOfflineContext: N,
      cloneBuffer: I,
      reverseBuffer: U,
      ramp: W,
      getFrequency: H,
      microphone: X,
      timeCode: Z,
      waveformer: B
    }),
    ge = new Q();
  return ge;
});

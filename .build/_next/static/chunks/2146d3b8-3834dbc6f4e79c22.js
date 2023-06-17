(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[249], { 3014: function(t) {
  t.exports = function t2(e, o, i) {
    function n(r2, a) {
      if (!o[r2]) {
        if (!e[r2]) {
          if (s)
            return s(r2, true);
          throw Error("Cannot find module '" + r2 + "'");
        }
        var l = o[r2] = { exports: {} };
        e[r2][0].call(l.exports, function(t3) {
          return n(e[r2][1][t3] || t3);
        }, l, l.exports, t2, e, o, i);
      }
      return o[r2].exports;
    }
    for (var s = void 0, r = 0; r < i.length; r++)
      n(i[r]);
    return n;
  }({ 1: [function(t2, e, o) {
    e.exports = { name: "cannon", version: "0.6.2", description: "A lightweight 3D physics engine written in JavaScript.", homepage: "https://github.com/schteppe/cannon.js", author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)", keywords: ["cannon.js", "cannon", "physics", "engine", "3d"], main: "./build/cannon.js", engines: { node: "*" }, repository: { type: "git", url: "https://github.com/schteppe/cannon.js.git" }, bugs: { url: "https://github.com/schteppe/cannon.js/issues" }, licenses: [{ type: "MIT" }], devDependencies: { jshint: "latest", "uglify-js": "latest", nodeunit: "^0.9.0", grunt: "~0.4.0", "grunt-contrib-jshint": "~0.1.1", "grunt-contrib-nodeunit": "^0.4.1", "grunt-contrib-concat": "~0.1.3", "grunt-contrib-uglify": "^0.5.1", "grunt-browserify": "^2.1.4", "grunt-contrib-yuidoc": "^0.5.2", browserify: "*" }, dependencies: {} };
  }, {}], 2: [function(t2, e, o) {
    e.exports = { version: t2("../package.json").version, AABB: t2("./collision/AABB"), ArrayCollisionMatrix: t2("./collision/ArrayCollisionMatrix"), Body: t2("./objects/Body"), Box: t2("./shapes/Box"), Broadphase: t2("./collision/Broadphase"), Constraint: t2("./constraints/Constraint"), ContactEquation: t2("./equations/ContactEquation"), Narrowphase: t2("./world/Narrowphase"), ConeTwistConstraint: t2("./constraints/ConeTwistConstraint"), ContactMaterial: t2("./material/ContactMaterial"), ConvexPolyhedron: t2("./shapes/ConvexPolyhedron"), Cylinder: t2("./shapes/Cylinder"), DistanceConstraint: t2("./constraints/DistanceConstraint"), Equation: t2("./equations/Equation"), EventTarget: t2("./utils/EventTarget"), FrictionEquation: t2("./equations/FrictionEquation"), GSSolver: t2("./solver/GSSolver"), GridBroadphase: t2("./collision/GridBroadphase"), Heightfield: t2("./shapes/Heightfield"), HingeConstraint: t2("./constraints/HingeConstraint"), LockConstraint: t2("./constraints/LockConstraint"), Mat3: t2("./math/Mat3"), Material: t2("./material/Material"), NaiveBroadphase: t2("./collision/NaiveBroadphase"), ObjectCollisionMatrix: t2("./collision/ObjectCollisionMatrix"), Pool: t2("./utils/Pool"), Particle: t2("./shapes/Particle"), Plane: t2("./shapes/Plane"), PointToPointConstraint: t2("./constraints/PointToPointConstraint"), Quaternion: t2("./math/Quaternion"), Ray: t2("./collision/Ray"), RaycastVehicle: t2("./objects/RaycastVehicle"), RaycastResult: t2("./collision/RaycastResult"), RigidVehicle: t2("./objects/RigidVehicle"), RotationalEquation: t2("./equations/RotationalEquation"), RotationalMotorEquation: t2("./equations/RotationalMotorEquation"), SAPBroadphase: t2("./collision/SAPBroadphase"), SPHSystem: t2("./objects/SPHSystem"), Shape: t2("./shapes/Shape"), Solver: t2("./solver/Solver"), Sphere: t2("./shapes/Sphere"), SplitSolver: t2("./solver/SplitSolver"), Spring: t2("./objects/Spring"), Trimesh: t2("./shapes/Trimesh"), Vec3: t2("./math/Vec3"), Vec3Pool: t2("./utils/Vec3Pool"), World: t2("./world/World") };
  }, { "../package.json": 1, "./collision/AABB": 3, "./collision/ArrayCollisionMatrix": 4, "./collision/Broadphase": 5, "./collision/GridBroadphase": 6, "./collision/NaiveBroadphase": 7, "./collision/ObjectCollisionMatrix": 8, "./collision/Ray": 9, "./collision/RaycastResult": 10, "./collision/SAPBroadphase": 11, "./constraints/ConeTwistConstraint": 12, "./constraints/Constraint": 13, "./constraints/DistanceConstraint": 14, "./constraints/HingeConstraint": 15, "./constraints/LockConstraint": 16, "./constraints/PointToPointConstraint": 17, "./equations/ContactEquation": 19, "./equations/Equation": 20, "./equations/FrictionEquation": 21, "./equations/RotationalEquation": 22, "./equations/RotationalMotorEquation": 23, "./material/ContactMaterial": 24, "./material/Material": 25, "./math/Mat3": 27, "./math/Quaternion": 28, "./math/Vec3": 30, "./objects/Body": 31, "./objects/RaycastVehicle": 32, "./objects/RigidVehicle": 33, "./objects/SPHSystem": 34, "./objects/Spring": 35, "./shapes/Box": 37, "./shapes/ConvexPolyhedron": 38, "./shapes/Cylinder": 39, "./shapes/Heightfield": 40, "./shapes/Particle": 41, "./shapes/Plane": 42, "./shapes/Shape": 43, "./shapes/Sphere": 44, "./shapes/Trimesh": 45, "./solver/GSSolver": 46, "./solver/Solver": 47, "./solver/SplitSolver": 48, "./utils/EventTarget": 49, "./utils/Pool": 51, "./utils/Vec3Pool": 54, "./world/Narrowphase": 55, "./world/World": 56 }], 3: [function(t2, e, o) {
    var i = t2("../math/Vec3");
    function n(t3) {
      t3 = t3 || {}, this.lowerBound = new i(), t3.lowerBound && this.lowerBound.copy(t3.lowerBound), this.upperBound = new i(), t3.upperBound && this.upperBound.copy(t3.upperBound);
    }
    t2("../utils/Utils"), e.exports = n;
    var s = new i();
    n.prototype.setFromPoints = function(t3, e2, o2, i2) {
      var n2 = this.lowerBound, r2 = this.upperBound;
      n2.copy(t3[0]), o2 && o2.vmult(n2, n2), r2.copy(n2);
      for (var a = 1; a < t3.length; a++) {
        var l = t3[a];
        o2 && (o2.vmult(l, s), l = s), l.x > r2.x && (r2.x = l.x), l.x < n2.x && (n2.x = l.x), l.y > r2.y && (r2.y = l.y), l.y < n2.y && (n2.y = l.y), l.z > r2.z && (r2.z = l.z), l.z < n2.z && (n2.z = l.z);
      }
      return e2 && (e2.vadd(n2, n2), e2.vadd(r2, r2)), i2 && (n2.x -= i2, n2.y -= i2, n2.z -= i2, r2.x += i2, r2.y += i2, r2.z += i2), this;
    }, n.prototype.copy = function(t3) {
      return this.lowerBound.copy(t3.lowerBound), this.upperBound.copy(t3.upperBound), this;
    }, n.prototype.clone = function() {
      return new n().copy(this);
    }, n.prototype.extend = function(t3) {
      var e2 = t3.lowerBound.x;
      this.lowerBound.x > e2 && (this.lowerBound.x = e2);
      var o2 = t3.upperBound.x;
      this.upperBound.x < o2 && (this.upperBound.x = o2);
      var e2 = t3.lowerBound.y;
      this.lowerBound.y > e2 && (this.lowerBound.y = e2);
      var o2 = t3.upperBound.y;
      this.upperBound.y < o2 && (this.upperBound.y = o2);
      var e2 = t3.lowerBound.z;
      this.lowerBound.z > e2 && (this.lowerBound.z = e2);
      var o2 = t3.upperBound.z;
      this.upperBound.z < o2 && (this.upperBound.z = o2);
    }, n.prototype.overlaps = function(t3) {
      var e2 = this.lowerBound, o2 = this.upperBound, i2 = t3.lowerBound, n2 = t3.upperBound;
      return (i2.x <= o2.x && o2.x <= n2.x || e2.x <= n2.x && n2.x <= o2.x) && (i2.y <= o2.y && o2.y <= n2.y || e2.y <= n2.y && n2.y <= o2.y) && (i2.z <= o2.z && o2.z <= n2.z || e2.z <= n2.z && n2.z <= o2.z);
    }, n.prototype.contains = function(t3) {
      var e2 = this.lowerBound, o2 = this.upperBound, i2 = t3.lowerBound, n2 = t3.upperBound;
      return e2.x <= i2.x && o2.x >= n2.x && e2.y <= i2.y && o2.y >= n2.y && e2.z <= i2.z && o2.z >= n2.z;
    }, n.prototype.getCorners = function(t3, e2, o2, i2, n2, s2, r2, a) {
      var l = this.lowerBound, h = this.upperBound;
      t3.copy(l), e2.set(h.x, l.y, l.z), o2.set(h.x, h.y, l.z), i2.set(l.x, h.y, h.z), n2.set(h.x, l.y, l.z), s2.set(l.x, h.y, l.z), r2.set(l.x, l.y, h.z), a.copy(h);
    };
    var r = [new i(), new i(), new i(), new i(), new i(), new i(), new i(), new i()];
    n.prototype.toLocalFrame = function(t3, e2) {
      var o2 = r[0], i2 = r[1], n2 = r[2], s2 = r[3], a = r[4], l = r[5], h = r[6], p = r[7];
      this.getCorners(o2, i2, n2, s2, a, l, h, p);
      for (var c = 0; 8 !== c; c++) {
        var u = r[c];
        t3.pointToLocal(u, u);
      }
      return e2.setFromPoints(r);
    }, n.prototype.toWorldFrame = function(t3, e2) {
      var o2 = r[0], i2 = r[1], n2 = r[2], s2 = r[3], a = r[4], l = r[5], h = r[6], p = r[7];
      this.getCorners(o2, i2, n2, s2, a, l, h, p);
      for (var c = 0; 8 !== c; c++) {
        var u = r[c];
        t3.pointToWorld(u, u);
      }
      return e2.setFromPoints(r);
    };
  }, { "../math/Vec3": 30, "../utils/Utils": 53 }], 4: [function(t2, e, o) {
    function i() {
      this.matrix = [];
    }
    e.exports = i, i.prototype.get = function(t3, e2) {
      if (t3 = t3.index, (e2 = e2.index) > t3) {
        var o2 = e2;
        e2 = t3, t3 = o2;
      }
      return this.matrix[(t3 * (t3 + 1) >> 1) + e2 - 1];
    }, i.prototype.set = function(t3, e2, o2) {
      if (t3 = t3.index, (e2 = e2.index) > t3) {
        var i2 = e2;
        e2 = t3, t3 = i2;
      }
      this.matrix[(t3 * (t3 + 1) >> 1) + e2 - 1] = o2 ? 1 : 0;
    }, i.prototype.reset = function() {
      for (var t3 = 0, e2 = this.matrix.length; t3 !== e2; t3++)
        this.matrix[t3] = 0;
    }, i.prototype.setNumObjects = function(t3) {
      this.matrix.length = t3 * (t3 - 1) >> 1;
    };
  }, {}], 5: [function(t2, e, o) {
    var i = t2("../objects/Body"), n = t2("../math/Vec3"), s = t2("../math/Quaternion");
    function r() {
      this.world = null, this.useBoundingBoxes = false, this.dirty = true;
    }
    t2("../shapes/Shape"), t2("../shapes/Plane"), e.exports = r, r.prototype.collisionPairs = function(t3, e2, o2) {
      throw Error("collisionPairs not implemented for this BroadPhase class!");
    };
    var a = i.STATIC | i.KINEMATIC;
    r.prototype.needBroadphaseCollision = function(t3, e2) {
      return (t3.collisionFilterGroup & e2.collisionFilterMask) != 0 && (e2.collisionFilterGroup & t3.collisionFilterMask) != 0 && ((t3.type & a) == 0 && t3.sleepState !== i.SLEEPING || (e2.type & a) == 0 && e2.sleepState !== i.SLEEPING);
    }, r.prototype.intersectionTest = function(t3, e2, o2, i2) {
      this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t3, e2, o2, i2) : this.doBoundingSphereBroadphase(t3, e2, o2, i2);
    };
    var l = new n();
    new n(), new s(), new n(), r.prototype.doBoundingSphereBroadphase = function(t3, e2, o2, i2) {
      e2.position.vsub(t3.position, l);
      var n2 = Math.pow(t3.boundingRadius + e2.boundingRadius, 2);
      l.norm2() < n2 && (o2.push(t3), i2.push(e2));
    }, r.prototype.doBoundingBoxBroadphase = function(t3, e2, o2, i2) {
      t3.aabbNeedsUpdate && t3.computeAABB(), e2.aabbNeedsUpdate && e2.computeAABB(), t3.aabb.overlaps(e2.aabb) && (o2.push(t3), i2.push(e2));
    };
    var h = { keys: [] }, p = [], c = [];
    r.prototype.makePairsUnique = function(t3, e2) {
      for (var o2 = t3.length, i2 = 0; i2 !== o2; i2++)
        p[i2] = t3[i2], c[i2] = e2[i2];
      t3.length = 0, e2.length = 0;
      for (var i2 = 0; i2 !== o2; i2++) {
        var n2 = p[i2].id, s2 = c[i2].id, r2 = n2 < s2 ? n2 + "," + s2 : s2 + "," + n2;
        h[r2] = i2, h.keys.push(r2);
      }
      for (var i2 = 0; i2 !== h.keys.length; i2++) {
        var r2 = h.keys.pop(), a2 = h[r2];
        t3.push(p[a2]), e2.push(c[a2]), delete h[r2];
      }
    }, r.prototype.setWorld = function(t3) {
    };
    var u = new n();
    r.boundingSphereCheck = function(t3, e2) {
      return t3.position.vsub(e2.position, u), Math.pow(t3.shape.boundingSphereRadius + e2.shape.boundingSphereRadius, 2) > u.norm2();
    }, r.prototype.aabbQuery = function(t3, e2, o2) {
      return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), [];
    };
  }, { "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Plane": 42, "../shapes/Shape": 43 }], 6: [function(t2, e, o) {
    e.exports = r;
    var i = t2("./Broadphase"), n = t2("../math/Vec3"), s = t2("../shapes/Shape");
    function r(t3, e2, o2, s2, r2) {
      i.apply(this), this.nx = o2 || 10, this.ny = s2 || 10, this.nz = r2 || 10, this.aabbMin = t3 || new n(100, 100, 100), this.aabbMax = e2 || new n(-100, -100, -100);
      var a2 = this.nx * this.ny * this.nz;
      if (a2 <= 0)
        throw "GridBroadphase: Each dimension's n must be >0";
      this.bins = [], this.binLengths = [], this.bins.length = a2, this.binLengths.length = a2;
      for (var l = 0; l < a2; l++)
        this.bins[l] = [], this.binLengths[l] = 0;
    }
    r.prototype = new i(), r.prototype.constructor = r;
    var a = new n();
    new n(), r.prototype.collisionPairs = function(t3, e2, o2) {
      var i2 = t3.numObjects(), n2 = t3.bodies, r2 = this.aabbMax, l = this.aabbMin, h = this.nx, p = this.ny, c = this.nz, u = p * c, d = r2.x, v = r2.y, y = r2.z, f = l.x, m = l.y, w = l.z, x = h / (d - f), g = p / (v - m), b = c / (y - w), B = (d - f) / h, E = (v - m) / p, A = (y - w) / c, S = 0.5 * Math.sqrt(B * B + E * E + A * A), C = s.types, z = C.SPHERE, q = C.PLANE;
      C.BOX, C.COMPOUND, C.CONVEXPOLYHEDRON;
      for (var R = this.bins, M = this.binLengths, P = this.bins.length, F = 0; F !== P; F++)
        M[F] = 0;
      var V = Math.ceil, l = Math.min, r2 = Math.max;
      function T(t4, e3, o3, i3, n3, s2, r3) {
        var a2 = (t4 - f) * x | 0, l2 = (e3 - m) * g | 0, d2 = (o3 - w) * b | 0, v2 = V((i3 - f) * x), y2 = V((n3 - m) * g), B2 = V((s2 - w) * b);
        a2 < 0 ? a2 = 0 : a2 >= h && (a2 = h - 1), l2 < 0 ? l2 = 0 : l2 >= p && (l2 = p - 1), d2 < 0 ? d2 = 0 : d2 >= c && (d2 = c - 1), v2 < 0 ? v2 = 0 : v2 >= h && (v2 = h - 1), y2 < 0 ? y2 = 0 : y2 >= p && (y2 = p - 1), B2 < 0 ? B2 = 0 : B2 >= c && (B2 = c - 1), a2 *= u, l2 *= c, d2 *= 1, v2 *= u, y2 *= c, B2 *= 1;
        for (var E2 = a2; E2 <= v2; E2 += u)
          for (var A2 = l2; A2 <= y2; A2 += c)
            for (var S2 = d2; S2 <= B2; S2 += 1) {
              var C2 = E2 + A2 + S2;
              R[C2][M[C2]++] = r3;
            }
      }
      for (var F = 0; F !== i2; F++) {
        var I = n2[F], N = I.shape;
        switch (N.type) {
          case z:
            var W = I.position.x, L = I.position.y, j = I.position.z, O = N.radius;
            T(W - O, L - O, j - O, W + O, L + O, j + O, I);
            break;
          case q:
            N.worldNormalNeedsUpdate && N.computeWorldNormal(I.quaternion);
            var k = N.worldNormal, _ = f + 0.5 * B - I.position.x, U = m + 0.5 * E - I.position.y, H = w + 0.5 * A - I.position.z;
            a.set(_, U, H);
            for (var D = 0, X = 0; D !== h; D++, X += u, a.y = U, a.x += B)
              for (var G = 0, Y = 0; G !== p; G++, Y += c, a.z = H, a.y += E)
                for (var Q = 0, Z = 0; Q !== c; Q++, Z += 1, a.z += A)
                  if (a.dot(k) < S) {
                    var K = X + Y + Z;
                    R[K][M[K]++] = I;
                  }
            break;
          default:
            I.aabbNeedsUpdate && I.computeAABB(), T(I.aabb.lowerBound.x, I.aabb.lowerBound.y, I.aabb.lowerBound.z, I.aabb.upperBound.x, I.aabb.upperBound.y, I.aabb.upperBound.z, I);
        }
      }
      for (var F = 0; F !== P; F++) {
        var J = M[F];
        if (J > 1)
          for (var $ = R[F], D = 0; D !== J; D++)
            for (var I = $[D], G = 0; G !== D; G++) {
              var tt = $[G];
              this.needBroadphaseCollision(I, tt) && this.intersectionTest(I, tt, e2, o2);
            }
      }
      this.makePairsUnique(e2, o2);
    };
  }, { "../math/Vec3": 30, "../shapes/Shape": 43, "./Broadphase": 5 }], 7: [function(t2, e, o) {
    e.exports = s;
    var i = t2("./Broadphase"), n = t2("./AABB");
    function s() {
      i.apply(this);
    }
    s.prototype = new i(), s.prototype.constructor = s, s.prototype.collisionPairs = function(t3, e2, o2) {
      var i2, n2, s2, r, a = t3.bodies, l = a.length;
      for (i2 = 0; i2 !== l; i2++)
        for (n2 = 0; n2 !== i2; n2++)
          s2 = a[i2], r = a[n2], this.needBroadphaseCollision(s2, r) && this.intersectionTest(s2, r, e2, o2);
    }, new n(), s.prototype.aabbQuery = function(t3, e2, o2) {
      o2 = o2 || [];
      for (var i2 = 0; i2 < t3.bodies.length; i2++) {
        var n2 = t3.bodies[i2];
        n2.aabbNeedsUpdate && n2.computeAABB(), n2.aabb.overlaps(e2) && o2.push(n2);
      }
      return o2;
    };
  }, { "./AABB": 3, "./Broadphase": 5 }], 8: [function(t2, e, o) {
    function i() {
      this.matrix = {};
    }
    e.exports = i, i.prototype.get = function(t3, e2) {
      if (t3 = t3.id, (e2 = e2.id) > t3) {
        var o2 = e2;
        e2 = t3, t3 = o2;
      }
      return t3 + "-" + e2 in this.matrix;
    }, i.prototype.set = function(t3, e2, o2) {
      if (t3 = t3.id, (e2 = e2.id) > t3) {
        var i2 = e2;
        e2 = t3, t3 = i2;
      }
      o2 ? this.matrix[t3 + "-" + e2] = true : delete this.matrix[t3 + "-" + e2];
    }, i.prototype.reset = function() {
      this.matrix = {};
    }, i.prototype.setNumObjects = function(t3) {
    };
  }, {}], 9: [function(t2, e, o) {
    e.exports = h;
    var i = t2("../math/Vec3"), n = t2("../math/Quaternion"), s = t2("../math/Transform");
    t2("../shapes/ConvexPolyhedron"), t2("../shapes/Box");
    var r = t2("../collision/RaycastResult"), a = t2("../shapes/Shape"), l = t2("../collision/AABB");
    function h(t3, e2) {
      this.from = t3 ? t3.clone() : new i(), this.to = e2 ? e2.clone() : new i(), this._direction = new i(), this.precision = 1e-4, this.checkCollisionResponse = true, this.skipBackfaces = false, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = h.ANY, this.result = new r(), this.hasHit = false, this.callback = function(t4) {
      };
    }
    h.prototype.constructor = h, h.CLOSEST = 1, h.ANY = 2, h.ALL = 4;
    var p = new l(), c = [];
    h.prototype.intersectWorld = function(t3, e2) {
      return this.mode = e2.mode || h.ANY, this.result = e2.result || new r(), this.skipBackfaces = !!e2.skipBackfaces, this.collisionFilterMask = void 0 !== e2.collisionFilterMask ? e2.collisionFilterMask : -1, this.collisionFilterGroup = void 0 !== e2.collisionFilterGroup ? e2.collisionFilterGroup : -1, e2.from && this.from.copy(e2.from), e2.to && this.to.copy(e2.to), this.callback = e2.callback || function() {
      }, this.hasHit = false, this.result.reset(), this._updateDirection(), this.getAABB(p), c.length = 0, t3.broadphase.aabbQuery(t3, p, c), this.intersectBodies(c), this.hasHit;
    };
    var u = new i(), d = new i();
    function v(t3, e2, o2, i2) {
      i2.vsub(e2, T), o2.vsub(e2, u), t3.vsub(e2, d);
      var n2, s2, r2 = T.dot(T), a2 = T.dot(u), l2 = T.dot(d), h2 = u.dot(u), p2 = u.dot(d);
      return (n2 = h2 * l2 - a2 * p2) >= 0 && (s2 = r2 * p2 - a2 * l2) >= 0 && n2 + s2 < r2 * h2 - a2 * a2;
    }
    h.pointInTriangle = v;
    var y = new i(), f = new n();
    h.prototype.intersectBody = function(t3, e2) {
      e2 && (this.result = e2, this._updateDirection());
      var o2 = this.checkCollisionResponse;
      if ((!o2 || t3.collisionResponse) && (this.collisionFilterGroup & t3.collisionFilterMask) != 0 && (t3.collisionFilterGroup & this.collisionFilterMask) != 0)
        for (var i2 = 0, n2 = t3.shapes.length; i2 < n2; i2++) {
          var s2 = t3.shapes[i2];
          if ((!o2 || s2.collisionResponse) && (t3.quaternion.mult(t3.shapeOrientations[i2], f), t3.quaternion.vmult(t3.shapeOffsets[i2], y), y.vadd(t3.position, y), this.intersectShape(s2, f, y, t3), this.result._shouldStop))
            break;
        }
    }, h.prototype.intersectBodies = function(t3, e2) {
      e2 && (this.result = e2, this._updateDirection());
      for (var o2 = 0, i2 = t3.length; !this.result._shouldStop && o2 < i2; o2++)
        this.intersectBody(t3[o2]);
    }, h.prototype._updateDirection = function() {
      this.to.vsub(this.from, this._direction), this._direction.normalize();
    }, h.prototype.intersectShape = function(t3, e2, o2, i2) {
      if (!(function(t4, e3, o3) {
        o3.vsub(t4, T);
        var i3 = T.dot(e3);
        return e3.mult(i3, I), I.vadd(t4, I), o3.distanceTo(I);
      }(this.from, this._direction, o2) > t3.boundingSphereRadius)) {
        var n2 = this[t3.type];
        n2 && n2.call(this, t3, e2, o2, i2);
      }
    }, new i(), new i();
    var m = new i(), w = new i(), x = new i(), g = new i();
    new i(), new r(), h.prototype.intersectBox = function(t3, e2, o2, i2) {
      return this.intersectConvex(t3.convexPolyhedronRepresentation, e2, o2, i2);
    }, h.prototype[a.types.BOX] = h.prototype.intersectBox, h.prototype.intersectPlane = function(t3, e2, o2, n2) {
      var s2 = this.from, r2 = this.to, a2 = this._direction, l2 = new i(0, 0, 1);
      e2.vmult(l2, l2);
      var h2 = new i();
      s2.vsub(o2, h2);
      var p2 = h2.dot(l2);
      if (r2.vsub(o2, h2), !(p2 * h2.dot(l2) > 0 || s2.distanceTo(r2) < p2)) {
        var c2 = l2.dot(a2);
        if (!(Math.abs(c2) < this.precision)) {
          var u2 = new i(), d2 = new i(), v2 = new i();
          s2.vsub(o2, u2);
          var y2 = -l2.dot(u2) / c2;
          a2.scale(y2, d2), s2.vadd(d2, v2), this.reportIntersection(l2, v2, t3, n2, -1);
        }
      }
    }, h.prototype[a.types.PLANE] = h.prototype.intersectPlane, h.prototype.getAABB = function(t3) {
      var e2 = this.to, o2 = this.from;
      t3.lowerBound.x = Math.min(e2.x, o2.x), t3.lowerBound.y = Math.min(e2.y, o2.y), t3.lowerBound.z = Math.min(e2.z, o2.z), t3.upperBound.x = Math.max(e2.x, o2.x), t3.upperBound.y = Math.max(e2.y, o2.y), t3.upperBound.z = Math.max(e2.z, o2.z);
    };
    var b = { faceList: [0] };
    h.prototype.intersectHeightfield = function(t3, e2, o2, n2) {
      t3.data, t3.elementSize;
      var r2 = new i(), a2 = new h(this.from, this.to);
      s.pointToLocalFrame(o2, e2, a2.from, a2.from), s.pointToLocalFrame(o2, e2, a2.to, a2.to);
      var l2 = [], p2 = null, c2 = null, u2 = null, d2 = null, v2 = t3.getIndexOfPosition(a2.from.x, a2.from.y, l2, false);
      if (v2 && (p2 = l2[0], c2 = l2[1], u2 = l2[0], d2 = l2[1]), (v2 = t3.getIndexOfPosition(a2.to.x, a2.to.y, l2, false)) && ((null === p2 || l2[0] < p2) && (p2 = l2[0]), (null === u2 || l2[0] > u2) && (u2 = l2[0]), (null === c2 || l2[1] < c2) && (c2 = l2[1]), (null === d2 || l2[1] > d2) && (d2 = l2[1])), null !== p2) {
        var y2 = [];
        t3.getRectMinMax(p2, c2, u2, d2, y2), y2[0], y2[1];
        for (var f2 = p2; f2 <= u2; f2++)
          for (var m2 = c2; m2 <= d2; m2++) {
            if (this.result._shouldStop || (t3.getConvexTrianglePillar(f2, m2, false), s.pointToWorldFrame(o2, e2, t3.pillarOffset, r2), this.intersectConvex(t3.pillarConvex, e2, r2, n2, b), this.result._shouldStop))
              return;
            t3.getConvexTrianglePillar(f2, m2, true), s.pointToWorldFrame(o2, e2, t3.pillarOffset, r2), this.intersectConvex(t3.pillarConvex, e2, r2, n2, b);
          }
      }
    }, h.prototype[a.types.HEIGHTFIELD] = h.prototype.intersectHeightfield;
    var B = new i(), E = new i();
    h.prototype.intersectSphere = function(t3, e2, o2, i2) {
      var n2 = this.from, s2 = this.to, r2 = t3.radius, a2 = Math.pow(s2.x - n2.x, 2) + Math.pow(s2.y - n2.y, 2) + Math.pow(s2.z - n2.z, 2), l2 = 2 * ((s2.x - n2.x) * (n2.x - o2.x) + (s2.y - n2.y) * (n2.y - o2.y) + (s2.z - n2.z) * (n2.z - o2.z)), h2 = Math.pow(l2, 2) - 4 * a2 * (Math.pow(n2.x - o2.x, 2) + Math.pow(n2.y - o2.y, 2) + Math.pow(n2.z - o2.z, 2) - Math.pow(r2, 2));
      if (!(h2 < 0)) {
        if (0 === h2)
          n2.lerp(s2, h2, B), B.vsub(o2, E), E.normalize(), this.reportIntersection(E, B, t3, i2, -1);
        else {
          var p2 = (-l2 - Math.sqrt(h2)) / (2 * a2), c2 = (-l2 + Math.sqrt(h2)) / (2 * a2);
          if (p2 >= 0 && p2 <= 1 && (n2.lerp(s2, p2, B), B.vsub(o2, E), E.normalize(), this.reportIntersection(E, B, t3, i2, -1)), this.result._shouldStop)
            return;
          c2 >= 0 && c2 <= 1 && (n2.lerp(s2, c2, B), B.vsub(o2, E), E.normalize(), this.reportIntersection(E, B, t3, i2, -1));
        }
      }
    }, h.prototype[a.types.SPHERE] = h.prototype.intersectSphere;
    var A = new i();
    new i(), new i();
    var S = new i();
    h.prototype.intersectConvex = function(t3, e2, o2, i2, n2) {
      for (var s2 = n2 && n2.faceList || null, r2 = t3.faces, a2 = t3.vertices, l2 = t3.faceNormals, h2 = this._direction, p2 = this.from, c2 = this.to, u2 = p2.distanceTo(c2), d2 = s2 ? s2.length : r2.length, y2 = this.result, f2 = 0; !y2._shouldStop && f2 < d2; f2++) {
        var b2 = s2 ? s2[f2] : f2, B2 = r2[b2], E2 = l2[b2];
        S.copy(a2[B2[0]]), e2.vmult(S, S), S.vadd(o2, S), S.vsub(p2, S), e2.vmult(E2, A);
        var C2 = h2.dot(A);
        if (!(Math.abs(C2) < this.precision)) {
          var z2 = A.dot(S) / C2;
          if (!(z2 < 0)) {
            h2.mult(z2, m), m.vadd(p2, m), w.copy(a2[B2[0]]), e2.vmult(w, w), o2.vadd(w, w);
            for (var q2 = 1; !y2._shouldStop && q2 < B2.length - 1; q2++) {
              x.copy(a2[B2[q2]]), g.copy(a2[B2[q2 + 1]]), e2.vmult(x, x), e2.vmult(g, g), o2.vadd(x, x), o2.vadd(g, g);
              var R2 = m.distanceTo(p2);
              (v(m, w, x, g) || v(m, x, w, g)) && !(R2 > u2) && this.reportIntersection(A, m, t3, i2, b2);
            }
          }
        }
      }
    }, h.prototype[a.types.CONVEXPOLYHEDRON] = h.prototype.intersectConvex;
    var C = new i(), z = new i(), q = new i(), R = new i(), M = new i(), P = new i();
    new l();
    var F = [], V = new s();
    h.prototype.intersectTrimesh = function(t3, e2, o2, i2, n2) {
      n2 && n2.faceList;
      var r2 = t3.indices;
      t3.vertices, t3.faceNormals;
      var a2 = this.from, l2 = this.to, h2 = this._direction;
      V.position.copy(o2), V.quaternion.copy(e2), s.vectorToLocalFrame(o2, e2, h2, z), s.pointToLocalFrame(o2, e2, a2, q), s.pointToLocalFrame(o2, e2, l2, R);
      var p2 = q.distanceSquared(R);
      t3.tree.rayQuery(this, V, F);
      for (var c2 = 0, u2 = F.length; !this.result._shouldStop && c2 !== u2; c2++) {
        var d2 = F[c2];
        t3.getNormal(d2, C), t3.getVertex(r2[3 * d2], w), w.vsub(q, S);
        var y2 = z.dot(C), f2 = C.dot(S) / y2;
        if (!(f2 < 0)) {
          z.scale(f2, m), m.vadd(q, m), t3.getVertex(r2[3 * d2 + 1], x), t3.getVertex(r2[3 * d2 + 2], g);
          var b2 = m.distanceSquared(q);
          (v(m, x, w, g) || v(m, w, x, g)) && !(b2 > p2) && (s.vectorToWorldFrame(e2, C, M), s.pointToWorldFrame(o2, e2, m, P), this.reportIntersection(M, P, t3, i2, d2));
        }
      }
      F.length = 0;
    }, h.prototype[a.types.TRIMESH] = h.prototype.intersectTrimesh, h.prototype.reportIntersection = function(t3, e2, o2, i2, n2) {
      var s2 = this.from, r2 = this.to, a2 = s2.distanceTo(e2), l2 = this.result;
      if (!(this.skipBackfaces && t3.dot(this._direction) > 0))
        switch (l2.hitFaceIndex = void 0 !== n2 ? n2 : -1, this.mode) {
          case h.ALL:
            this.hasHit = true, l2.set(s2, r2, t3, e2, o2, i2, a2), l2.hasHit = true, this.callback(l2);
            break;
          case h.CLOSEST:
            (a2 < l2.distance || !l2.hasHit) && (this.hasHit = true, l2.hasHit = true, l2.set(s2, r2, t3, e2, o2, i2, a2));
            break;
          case h.ANY:
            this.hasHit = true, l2.hasHit = true, l2.set(s2, r2, t3, e2, o2, i2, a2), l2._shouldStop = true;
        }
    };
    var T = new i(), I = new i();
  }, { "../collision/AABB": 3, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43 }], 10: [function(t2, e, o) {
    var i = t2("../math/Vec3");
    function n() {
      this.rayFromWorld = new i(), this.rayToWorld = new i(), this.hitNormalWorld = new i(), this.hitPointWorld = new i(), this.hasHit = false, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = false;
    }
    e.exports = n, n.prototype.reset = function() {
      this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), this.hitPointWorld.setZero(), this.hasHit = false, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = false;
    }, n.prototype.abort = function() {
      this._shouldStop = true;
    }, n.prototype.set = function(t3, e2, o2, i2, n2, s, r) {
      this.rayFromWorld.copy(t3), this.rayToWorld.copy(e2), this.hitNormalWorld.copy(o2), this.hitPointWorld.copy(i2), this.shape = n2, this.body = s, this.distance = r;
    };
  }, { "../math/Vec3": 30 }], 11: [function(t2, e, o) {
    t2("../shapes/Shape");
    var i = t2("../collision/Broadphase");
    function n(t3) {
      i.apply(this), this.axisList = [], this.world = null, this.axisIndex = 0;
      var e2 = this.axisList;
      this._addBodyHandler = function(t4) {
        e2.push(t4.body);
      }, this._removeBodyHandler = function(t4) {
        var o2 = e2.indexOf(t4.body);
        -1 !== o2 && e2.splice(o2, 1);
      }, t3 && this.setWorld(t3);
    }
    e.exports = n, n.prototype = new i(), n.prototype.setWorld = function(t3) {
      this.axisList.length = 0;
      for (var e2 = 0; e2 < t3.bodies.length; e2++)
        this.axisList.push(t3.bodies[e2]);
      t3.removeEventListener("addBody", this._addBodyHandler), t3.removeEventListener("removeBody", this._removeBodyHandler), t3.addEventListener("addBody", this._addBodyHandler), t3.addEventListener("removeBody", this._removeBodyHandler), this.world = t3, this.dirty = true;
    }, n.insertionSortX = function(t3) {
      for (var e2 = 1, o2 = t3.length; e2 < o2; e2++) {
        for (var i2 = t3[e2], n2 = e2 - 1; n2 >= 0 && !(t3[n2].aabb.lowerBound.x <= i2.aabb.lowerBound.x); n2--)
          t3[n2 + 1] = t3[n2];
        t3[n2 + 1] = i2;
      }
      return t3;
    }, n.insertionSortY = function(t3) {
      for (var e2 = 1, o2 = t3.length; e2 < o2; e2++) {
        for (var i2 = t3[e2], n2 = e2 - 1; n2 >= 0 && !(t3[n2].aabb.lowerBound.y <= i2.aabb.lowerBound.y); n2--)
          t3[n2 + 1] = t3[n2];
        t3[n2 + 1] = i2;
      }
      return t3;
    }, n.insertionSortZ = function(t3) {
      for (var e2 = 1, o2 = t3.length; e2 < o2; e2++) {
        for (var i2 = t3[e2], n2 = e2 - 1; n2 >= 0 && !(t3[n2].aabb.lowerBound.z <= i2.aabb.lowerBound.z); n2--)
          t3[n2 + 1] = t3[n2];
        t3[n2 + 1] = i2;
      }
      return t3;
    }, n.prototype.collisionPairs = function(t3, e2, o2) {
      var i2, s, r = this.axisList, a = r.length, l = this.axisIndex;
      for (this.dirty && (this.sortList(), this.dirty = false), i2 = 0; i2 !== a; i2++) {
        var h = r[i2];
        for (s = i2 + 1; s < a; s++) {
          var p = r[s];
          if (this.needBroadphaseCollision(h, p)) {
            if (!n.checkBounds(h, p, l))
              break;
            this.intersectionTest(h, p, e2, o2);
          }
        }
      }
    }, n.prototype.sortList = function() {
      for (var t3 = this.axisList, e2 = this.axisIndex, o2 = t3.length, i2 = 0; i2 !== o2; i2++) {
        var s = t3[i2];
        s.aabbNeedsUpdate && s.computeAABB();
      }
      0 === e2 ? n.insertionSortX(t3) : 1 === e2 ? n.insertionSortY(t3) : 2 === e2 && n.insertionSortZ(t3);
    }, n.checkBounds = function(t3, e2, o2) {
      0 === o2 ? (i2 = t3.position.x, n2 = e2.position.x) : 1 === o2 ? (i2 = t3.position.y, n2 = e2.position.y) : 2 === o2 && (i2 = t3.position.z, n2 = e2.position.z);
      var i2, n2, s = t3.boundingRadius;
      return n2 - e2.boundingRadius < i2 + s;
    }, n.prototype.autoDetectAxis = function() {
      for (var t3 = 0, e2 = 0, o2 = 0, i2 = 0, n2 = 0, s = 0, r = this.axisList, a = r.length, l = 1 / a, h = 0; h !== a; h++) {
        var p = r[h], c = p.position.x;
        t3 += c, e2 += c * c;
        var u = p.position.y;
        o2 += u, i2 += u * u;
        var d = p.position.z;
        n2 += d, s += d * d;
      }
      var v = e2 - t3 * t3 * l, y = i2 - o2 * o2 * l, f = s - n2 * n2 * l;
      v > y ? v > f ? this.axisIndex = 0 : this.axisIndex = 2 : y > f ? this.axisIndex = 1 : this.axisIndex = 2;
    }, n.prototype.aabbQuery = function(t3, e2, o2) {
      o2 = o2 || [], this.dirty && (this.sortList(), this.dirty = false);
      var i2 = this.axisIndex, n2 = "x";
      1 === i2 && (n2 = "y"), 2 === i2 && (n2 = "z");
      var s = this.axisList;
      e2.lowerBound[n2], e2.upperBound[n2];
      for (var r = 0; r < s.length; r++) {
        var a = s[r];
        a.aabbNeedsUpdate && a.computeAABB(), a.aabb.overlaps(e2) && o2.push(a);
      }
      return o2;
    };
  }, { "../collision/Broadphase": 5, "../shapes/Shape": 43 }], 12: [function(t2, e, o) {
    e.exports = a, t2("./Constraint");
    var i = t2("./PointToPointConstraint"), n = t2("../equations/ConeEquation"), s = t2("../equations/RotationalEquation");
    t2("../equations/ContactEquation");
    var r = t2("../math/Vec3");
    function a(t3, e2, o2) {
      var a2 = void 0 !== (o2 = o2 || {}).maxForce ? o2.maxForce : 1e6, l = o2.pivotA ? o2.pivotA.clone() : new r(), h = o2.pivotB ? o2.pivotB.clone() : new r();
      this.axisA = o2.axisA ? o2.axisA.clone() : new r(), this.axisB = o2.axisB ? o2.axisB.clone() : new r(), i.call(this, t3, l, e2, h, a2), this.collideConnected = !!o2.collideConnected, this.angle = void 0 !== o2.angle ? o2.angle : 0;
      var p = this.coneEquation = new n(t3, e2, o2), c = this.twistEquation = new s(t3, e2, o2);
      this.twistAngle = void 0 !== o2.twistAngle ? o2.twistAngle : 0, p.maxForce = 0, p.minForce = -a2, c.maxForce = 0, c.minForce = -a2, this.equations.push(p, c);
    }
    a.prototype = new i(), a.constructor = a, new r(), new r(), a.prototype.update = function() {
      var t3 = this.bodyA, e2 = this.bodyB, o2 = this.coneEquation, n2 = this.twistEquation;
      i.prototype.update.call(this), t3.vectorToWorldFrame(this.axisA, o2.axisA), e2.vectorToWorldFrame(this.axisB, o2.axisB), this.axisA.tangents(n2.axisA, n2.axisA), t3.vectorToWorldFrame(n2.axisA, n2.axisA), this.axisB.tangents(n2.axisB, n2.axisB), e2.vectorToWorldFrame(n2.axisB, n2.axisB), o2.angle = this.angle, n2.maxAngle = this.twistAngle;
    };
  }, { "../equations/ConeEquation": 18, "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 13: [function(t2, e, o) {
    e.exports = n;
    var i = t2("../utils/Utils");
    function n(t3, e2, o2) {
      o2 = i.defaults(o2, { collideConnected: true, wakeUpBodies: true }), this.equations = [], this.bodyA = t3, this.bodyB = e2, this.id = n.idCounter++, this.collideConnected = o2.collideConnected, o2.wakeUpBodies && (t3 && t3.wakeUp(), e2 && e2.wakeUp());
    }
    n.prototype.update = function() {
      throw Error("method update() not implmemented in this Constraint subclass!");
    }, n.prototype.enable = function() {
      for (var t3 = this.equations, e2 = 0; e2 < t3.length; e2++)
        t3[e2].enabled = true;
    }, n.prototype.disable = function() {
      for (var t3 = this.equations, e2 = 0; e2 < t3.length; e2++)
        t3[e2].enabled = false;
    }, n.idCounter = 0;
  }, { "../utils/Utils": 53 }], 14: [function(t2, e, o) {
    e.exports = s;
    var i = t2("./Constraint"), n = t2("../equations/ContactEquation");
    function s(t3, e2, o2, s2) {
      i.call(this, t3, e2), void 0 === o2 && (o2 = t3.position.distanceTo(e2.position)), void 0 === s2 && (s2 = 1e6), this.distance = o2;
      var r = this.distanceEquation = new n(t3, e2);
      this.equations.push(r), r.minForce = -s2, r.maxForce = s2;
    }
    s.prototype = new i(), s.prototype.update = function() {
      var t3 = this.bodyA, e2 = this.bodyB, o2 = this.distanceEquation, i2 = 0.5 * this.distance, n2 = o2.ni;
      e2.position.vsub(t3.position, n2), n2.normalize(), n2.mult(i2, o2.ri), n2.mult(-i2, o2.rj);
    };
  }, { "../equations/ContactEquation": 19, "./Constraint": 13 }], 15: [function(t2, e, o) {
    e.exports = a, t2("./Constraint");
    var i = t2("./PointToPointConstraint"), n = t2("../equations/RotationalEquation"), s = t2("../equations/RotationalMotorEquation");
    t2("../equations/ContactEquation");
    var r = t2("../math/Vec3");
    function a(t3, e2, o2) {
      var a2 = void 0 !== (o2 = o2 || {}).maxForce ? o2.maxForce : 1e6, l2 = o2.pivotA ? o2.pivotA.clone() : new r(), h2 = o2.pivotB ? o2.pivotB.clone() : new r();
      i.call(this, t3, l2, e2, h2, a2), (this.axisA = o2.axisA ? o2.axisA.clone() : new r(1, 0, 0)).normalize(), (this.axisB = o2.axisB ? o2.axisB.clone() : new r(1, 0, 0)).normalize();
      var p = this.rotationalEquation1 = new n(t3, e2, o2), c = this.rotationalEquation2 = new n(t3, e2, o2), u = this.motorEquation = new s(t3, e2, a2);
      u.enabled = false, this.equations.push(p, c, u);
    }
    a.prototype = new i(), a.constructor = a, a.prototype.enableMotor = function() {
      this.motorEquation.enabled = true;
    }, a.prototype.disableMotor = function() {
      this.motorEquation.enabled = false;
    }, a.prototype.setMotorSpeed = function(t3) {
      this.motorEquation.targetVelocity = t3;
    }, a.prototype.setMotorMaxForce = function(t3) {
      this.motorEquation.maxForce = t3, this.motorEquation.minForce = -t3;
    };
    var l = new r(), h = new r();
    a.prototype.update = function() {
      var t3 = this.bodyA, e2 = this.bodyB, o2 = this.motorEquation, n2 = this.rotationalEquation1, s2 = this.rotationalEquation2, r2 = this.axisA, a2 = this.axisB;
      i.prototype.update.call(this), t3.quaternion.vmult(r2, l), e2.quaternion.vmult(a2, h), l.tangents(n2.axisA, s2.axisA), n2.axisB.copy(h), s2.axisB.copy(h), this.motorEquation.enabled && (t3.quaternion.vmult(this.axisA, o2.axisA), e2.quaternion.vmult(this.axisB, o2.axisB));
    };
  }, { "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 16: [function(t2, e, o) {
    e.exports = r, t2("./Constraint");
    var i = t2("./PointToPointConstraint"), n = t2("../equations/RotationalEquation");
    t2("../equations/RotationalMotorEquation"), t2("../equations/ContactEquation");
    var s = t2("../math/Vec3");
    function r(t3, e2, o2) {
      var r2 = void 0 !== (o2 = o2 || {}).maxForce ? o2.maxForce : 1e6, a = new s(), l = new s(), h = new s();
      t3.position.vadd(e2.position, h), h.scale(0.5, h), e2.pointToLocalFrame(h, l), t3.pointToLocalFrame(h, a), i.call(this, t3, a, e2, l, r2);
      var p = this.rotationalEquation1 = new n(t3, e2, o2), c = this.rotationalEquation2 = new n(t3, e2, o2), u = this.rotationalEquation3 = new n(t3, e2, o2);
      this.equations.push(p, c, u);
    }
    r.prototype = new i(), r.constructor = r, new s(), new s(), r.prototype.update = function() {
      var t3 = this.bodyA, e2 = this.bodyB, o2 = (this.motorEquation, this.rotationalEquation1), n2 = this.rotationalEquation2, r2 = this.rotationalEquation3;
      i.prototype.update.call(this), t3.vectorToWorldFrame(s.UNIT_X, o2.axisA), e2.vectorToWorldFrame(s.UNIT_Y, o2.axisB), t3.vectorToWorldFrame(s.UNIT_Y, n2.axisA), e2.vectorToWorldFrame(s.UNIT_Z, n2.axisB), t3.vectorToWorldFrame(s.UNIT_Z, r2.axisA), e2.vectorToWorldFrame(s.UNIT_X, r2.axisB);
    };
  }, { "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 17: [function(t2, e, o) {
    e.exports = r;
    var i = t2("./Constraint"), n = t2("../equations/ContactEquation"), s = t2("../math/Vec3");
    function r(t3, e2, o2, r2, a) {
      i.call(this, t3, o2), a = void 0 !== a ? a : 1e6, this.pivotA = e2 ? e2.clone() : new s(), this.pivotB = r2 ? r2.clone() : new s();
      var l = this.equationX = new n(t3, o2), h = this.equationY = new n(t3, o2), p = this.equationZ = new n(t3, o2);
      this.equations.push(l, h, p), l.minForce = h.minForce = p.minForce = -a, l.maxForce = h.maxForce = p.maxForce = a, l.ni.set(1, 0, 0), h.ni.set(0, 1, 0), p.ni.set(0, 0, 1);
    }
    r.prototype = new i(), r.prototype.update = function() {
      var t3 = this.bodyA, e2 = this.bodyB, o2 = this.equationX, i2 = this.equationY, n2 = this.equationZ;
      t3.quaternion.vmult(this.pivotA, o2.ri), e2.quaternion.vmult(this.pivotB, o2.rj), i2.ri.copy(o2.ri), i2.rj.copy(o2.rj), n2.ri.copy(o2.ri), n2.rj.copy(o2.rj);
    };
  }, { "../equations/ContactEquation": 19, "../math/Vec3": 30, "./Constraint": 13 }], 18: [function(t2, e, o) {
    e.exports = s;
    var i = t2("../math/Vec3");
    t2("../math/Mat3");
    var n = t2("./Equation");
    function s(t3, e2, o2) {
      var s2 = void 0 !== (o2 = o2 || {}).maxForce ? o2.maxForce : 1e6;
      n.call(this, t3, e2, -s2, s2), this.axisA = o2.axisA ? o2.axisA.clone() : new i(1, 0, 0), this.axisB = o2.axisB ? o2.axisB.clone() : new i(0, 1, 0), this.angle = void 0 !== o2.angle ? o2.angle : 0;
    }
    s.prototype = new n(), s.prototype.constructor = s;
    var r = new i(), a = new i();
    s.prototype.computeB = function(t3) {
      var e2 = this.a, o2 = this.b, i2 = this.axisA, n2 = this.axisB, s2 = this.jacobianElementA, l = this.jacobianElementB;
      return i2.cross(n2, r), n2.cross(i2, a), s2.rotational.copy(a), l.rotational.copy(r), -(Math.cos(this.angle) - i2.dot(n2)) * e2 - this.computeGW() * o2 - t3 * this.computeGiMf();
    };
  }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 19: [function(t2, e, o) {
    e.exports = s;
    var i = t2("./Equation"), n = t2("../math/Vec3");
    function s(t3, e2, o2) {
      o2 = void 0 !== o2 ? o2 : 1e6, i.call(this, t3, e2, 0, o2), this.restitution = 0, this.ri = new n(), this.rj = new n(), this.ni = new n();
    }
    t2("../math/Mat3"), s.prototype = new i(), s.prototype.constructor = s;
    var r = new n(), a = new n(), l = new n();
    s.prototype.computeB = function(t3) {
      var e2 = this.a, o2 = this.b, i2 = this.bi, n2 = this.bj, s2 = this.ri, h2 = this.rj, p2 = i2.velocity, c2 = i2.angularVelocity, u2 = (i2.force, i2.torque, n2.velocity), d2 = n2.angularVelocity, v = (n2.force, n2.torque, this.jacobianElementA), y = this.jacobianElementB, f = this.ni;
      s2.cross(f, r), h2.cross(f, a), f.negate(v.spatial), r.negate(v.rotational), y.spatial.copy(f), y.rotational.copy(a), l.copy(n2.position), l.vadd(h2, l), l.vsub(i2.position, l), l.vsub(s2, l);
      var m = f.dot(l), w = this.restitution + 1;
      return -m * e2 - (w * u2.dot(f) - w * p2.dot(f) + d2.dot(a) - c2.dot(r)) * o2 - t3 * this.computeGiMf();
    };
    var h = new n(), p = new n(), c = new n(), u = new n(), d = new n();
    s.prototype.getImpactVelocityAlongNormal = function() {
      return this.bi.position.vadd(this.ri, c), this.bj.position.vadd(this.rj, u), this.bi.getVelocityAtWorldPoint(c, h), this.bj.getVelocityAtWorldPoint(u, p), h.vsub(p, d), this.ni.dot(d);
    };
  }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 20: [function(t2, e, o) {
    e.exports = s;
    var i = t2("../math/JacobianElement"), n = t2("../math/Vec3");
    function s(t3, e2, o2, n2) {
      this.id = s.id++, this.minForce = void 0 === o2 ? -1e6 : o2, this.maxForce = void 0 === n2 ? 1e6 : n2, this.bi = t3, this.bj = e2, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new i(), this.jacobianElementB = new i(), this.enabled = true, this.setSpookParams(1e7, 4, 1 / 60);
    }
    s.prototype.constructor = s, s.id = 0, s.prototype.setSpookParams = function(t3, e2, o2) {
      this.a = 4 / (o2 * (1 + 4 * e2)), this.b = 4 * e2 / (1 + 4 * e2), this.eps = 4 / (o2 * o2 * t3 * (1 + 4 * e2));
    }, s.prototype.computeB = function(t3, e2, o2) {
      var i2 = this.computeGW();
      return -this.computeGq() * t3 - i2 * e2 - this.computeGiMf() * o2;
    }, s.prototype.computeGq = function() {
      var t3 = this.jacobianElementA, e2 = this.jacobianElementB, o2 = this.bi, i2 = this.bj, n2 = o2.position, s2 = i2.position;
      return t3.spatial.dot(n2) + e2.spatial.dot(s2);
    };
    var r = new n();
    s.prototype.computeGW = function() {
      var t3 = this.jacobianElementA, e2 = this.jacobianElementB, o2 = this.bi, i2 = this.bj, n2 = o2.velocity, s2 = i2.velocity, a2 = o2.angularVelocity || r, l2 = i2.angularVelocity || r;
      return t3.multiplyVectors(n2, a2) + e2.multiplyVectors(s2, l2);
    }, s.prototype.computeGWlambda = function() {
      var t3 = this.jacobianElementA, e2 = this.jacobianElementB, o2 = this.bi, i2 = this.bj, n2 = o2.vlambda, s2 = i2.vlambda, a2 = o2.wlambda || r, l2 = i2.wlambda || r;
      return t3.multiplyVectors(n2, a2) + e2.multiplyVectors(s2, l2);
    };
    var a = new n(), l = new n(), h = new n(), p = new n();
    s.prototype.computeGiMf = function() {
      var t3 = this.jacobianElementA, e2 = this.jacobianElementB, o2 = this.bi, i2 = this.bj, n2 = o2.force, s2 = o2.torque, r2 = i2.force, c2 = i2.torque, u2 = o2.invMassSolve, d = i2.invMassSolve;
      return o2.invInertiaWorldSolve ? o2.invInertiaWorldSolve.vmult(s2, h) : h.set(0, 0, 0), i2.invInertiaWorldSolve ? i2.invInertiaWorldSolve.vmult(c2, p) : p.set(0, 0, 0), n2.mult(u2, a), r2.mult(d, l), t3.multiplyVectors(a, h) + e2.multiplyVectors(l, p);
    };
    var c = new n();
    s.prototype.computeGiMGt = function() {
      var t3 = this.jacobianElementA, e2 = this.jacobianElementB, o2 = this.bi, i2 = this.bj, n2 = o2.invMassSolve, s2 = i2.invMassSolve, r2 = o2.invInertiaWorldSolve, a2 = i2.invInertiaWorldSolve, l2 = n2 + s2;
      return r2 && (r2.vmult(t3.rotational, c), l2 += c.dot(t3.rotational)), a2 && (a2.vmult(e2.rotational, c), l2 += c.dot(e2.rotational)), l2;
    };
    var u = new n();
    new n(), new n(), new n(), new n(), new n(), s.prototype.addToWlambda = function(t3) {
      var e2 = this.jacobianElementA, o2 = this.jacobianElementB, i2 = this.bi, n2 = this.bj;
      e2.spatial.mult(i2.invMassSolve * t3, u), i2.vlambda.vadd(u, i2.vlambda), o2.spatial.mult(n2.invMassSolve * t3, u), n2.vlambda.vadd(u, n2.vlambda), i2.invInertiaWorldSolve && (i2.invInertiaWorldSolve.vmult(e2.rotational, u), u.mult(t3, u), i2.wlambda.vadd(u, i2.wlambda)), n2.invInertiaWorldSolve && (n2.invInertiaWorldSolve.vmult(o2.rotational, u), u.mult(t3, u), n2.wlambda.vadd(u, n2.wlambda));
    }, s.prototype.computeC = function() {
      return this.computeGiMGt() + this.eps;
    };
  }, { "../math/JacobianElement": 26, "../math/Vec3": 30 }], 21: [function(t2, e, o) {
    e.exports = s;
    var i = t2("./Equation"), n = t2("../math/Vec3");
    function s(t3, e2, o2) {
      i.call(this, t3, e2, -o2, o2), this.ri = new n(), this.rj = new n(), this.t = new n();
    }
    t2("../math/Mat3"), s.prototype = new i(), s.prototype.constructor = s;
    var r = new n(), a = new n();
    s.prototype.computeB = function(t3) {
      this.a;
      var e2 = this.b, o2 = (this.bi, this.bj, this.ri), i2 = this.rj, n2 = this.t;
      o2.cross(n2, r), i2.cross(n2, a);
      var s2 = this.jacobianElementA, l = this.jacobianElementB;
      return n2.negate(s2.spatial), r.negate(s2.rotational), l.spatial.copy(n2), l.rotational.copy(a), -this.computeGW() * e2 - t3 * this.computeGiMf();
    };
  }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 22: [function(t2, e, o) {
    e.exports = s;
    var i = t2("../math/Vec3");
    t2("../math/Mat3");
    var n = t2("./Equation");
    function s(t3, e2, o2) {
      var s2 = void 0 !== (o2 = o2 || {}).maxForce ? o2.maxForce : 1e6;
      n.call(this, t3, e2, -s2, s2), this.axisA = o2.axisA ? o2.axisA.clone() : new i(1, 0, 0), this.axisB = o2.axisB ? o2.axisB.clone() : new i(0, 1, 0), this.maxAngle = Math.PI / 2;
    }
    s.prototype = new n(), s.prototype.constructor = s;
    var r = new i(), a = new i();
    s.prototype.computeB = function(t3) {
      var e2 = this.a, o2 = this.b, i2 = this.axisA, n2 = this.axisB, s2 = this.jacobianElementA, l = this.jacobianElementB;
      return i2.cross(n2, r), n2.cross(i2, a), s2.rotational.copy(a), l.rotational.copy(r), -(Math.cos(this.maxAngle) - i2.dot(n2)) * e2 - this.computeGW() * o2 - t3 * this.computeGiMf();
    };
  }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 23: [function(t2, e, o) {
    e.exports = s;
    var i = t2("../math/Vec3");
    t2("../math/Mat3");
    var n = t2("./Equation");
    function s(t3, e2, o2) {
      o2 = void 0 !== o2 ? o2 : 1e6, n.call(this, t3, e2, -o2, o2), this.axisA = new i(), this.axisB = new i(), this.targetVelocity = 0;
    }
    s.prototype = new n(), s.prototype.constructor = s, s.prototype.computeB = function(t3) {
      this.a;
      var e2 = this.b, o2 = (this.bi, this.bj, this.axisA), i2 = this.axisB, n2 = this.jacobianElementA, s2 = this.jacobianElementB;
      return n2.rotational.copy(o2), i2.negate(s2.rotational), -(this.computeGW() - this.targetVelocity) * e2 - t3 * this.computeGiMf();
    };
  }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 24: [function(t2, e, o) {
    var i = t2("../utils/Utils");
    function n(t3, e2, o2) {
      o2 = i.defaults(o2, { friction: 0.3, restitution: 0.3, contactEquationStiffness: 1e7, contactEquationRelaxation: 3, frictionEquationStiffness: 1e7, frictionEquationRelaxation: 3 }), this.id = n.idCounter++, this.materials = [t3, e2], this.friction = o2.friction, this.restitution = o2.restitution, this.contactEquationStiffness = o2.contactEquationStiffness, this.contactEquationRelaxation = o2.contactEquationRelaxation, this.frictionEquationStiffness = o2.frictionEquationStiffness, this.frictionEquationRelaxation = o2.frictionEquationRelaxation;
    }
    e.exports = n, n.idCounter = 0;
  }, { "../utils/Utils": 53 }], 25: [function(t2, e, o) {
    function i(t3) {
      var e2 = "";
      "string" == typeof (t3 = t3 || {}) ? (e2 = t3, t3 = {}) : "object" == typeof t3 && (e2 = ""), this.name = e2, this.id = i.idCounter++, this.friction = void 0 !== t3.friction ? t3.friction : -1, this.restitution = void 0 !== t3.restitution ? t3.restitution : -1;
    }
    e.exports = i, i.idCounter = 0;
  }, {}], 26: [function(t2, e, o) {
    e.exports = n;
    var i = t2("./Vec3");
    function n() {
      this.spatial = new i(), this.rotational = new i();
    }
    n.prototype.multiplyElement = function(t3) {
      return t3.spatial.dot(this.spatial) + t3.rotational.dot(this.rotational);
    }, n.prototype.multiplyVectors = function(t3, e2) {
      return t3.dot(this.spatial) + e2.dot(this.rotational);
    };
  }, { "./Vec3": 30 }], 27: [function(t2, e, o) {
    e.exports = n;
    var i = t2("./Vec3");
    function n(t3) {
      t3 ? this.elements = t3 : this.elements = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    n.prototype.identity = function() {
      var t3 = this.elements;
      t3[0] = 1, t3[1] = 0, t3[2] = 0, t3[3] = 0, t3[4] = 1, t3[5] = 0, t3[6] = 0, t3[7] = 0, t3[8] = 1;
    }, n.prototype.setZero = function() {
      var t3 = this.elements;
      t3[0] = 0, t3[1] = 0, t3[2] = 0, t3[3] = 0, t3[4] = 0, t3[5] = 0, t3[6] = 0, t3[7] = 0, t3[8] = 0;
    }, n.prototype.setTrace = function(t3) {
      var e2 = this.elements;
      e2[0] = t3.x, e2[4] = t3.y, e2[8] = t3.z;
    }, n.prototype.getTrace = function(t3) {
      var t3 = t3 || new i(), e2 = this.elements;
      t3.x = e2[0], t3.y = e2[4], t3.z = e2[8];
    }, n.prototype.vmult = function(t3, e2) {
      e2 = e2 || new i();
      var o2 = this.elements, n2 = t3.x, s = t3.y, r = t3.z;
      return e2.x = o2[0] * n2 + o2[1] * s + o2[2] * r, e2.y = o2[3] * n2 + o2[4] * s + o2[5] * r, e2.z = o2[6] * n2 + o2[7] * s + o2[8] * r, e2;
    }, n.prototype.smult = function(t3) {
      for (var e2 = 0; e2 < this.elements.length; e2++)
        this.elements[e2] *= t3;
    }, n.prototype.mmult = function(t3, e2) {
      for (var o2 = e2 || new n(), i2 = 0; i2 < 3; i2++)
        for (var s = 0; s < 3; s++) {
          for (var r = 0, a = 0; a < 3; a++)
            r += t3.elements[i2 + 3 * a] * this.elements[a + 3 * s];
          o2.elements[i2 + 3 * s] = r;
        }
      return o2;
    }, n.prototype.scale = function(t3, e2) {
      e2 = e2 || new n();
      for (var o2 = this.elements, i2 = e2.elements, s = 0; 3 !== s; s++)
        i2[3 * s + 0] = t3.x * o2[3 * s + 0], i2[3 * s + 1] = t3.y * o2[3 * s + 1], i2[3 * s + 2] = t3.z * o2[3 * s + 2];
      return e2;
    }, n.prototype.solve = function(t3, e2) {
      e2 = e2 || new i();
      for (var o2 = [], n2 = 0; n2 < 12; n2++)
        o2.push(0);
      for (n2 = 0; n2 < 3; n2++)
        for (r = 0; r < 3; r++)
          o2[n2 + 4 * r] = this.elements[n2 + 3 * r];
      o2[3] = t3.x, o2[7] = t3.y, o2[11] = t3.z;
      var s, n2, r, a, l = 3;
      do {
        if (0 === o2[(n2 = 3 - l) + 4 * n2]) {
          for (r = n2 + 1; r < 3; r++)
            if (0 !== o2[n2 + 4 * r]) {
              a = 4;
              do
                s = 4 - a, o2[s + 4 * n2] += o2[s + 4 * r];
              while (--a);
              break;
            }
        }
        if (0 !== o2[n2 + 4 * n2])
          for (r = n2 + 1; r < 3; r++) {
            var h = o2[n2 + 4 * r] / o2[n2 + 4 * n2];
            a = 4;
            do
              o2[(s = 4 - a) + 4 * r] = s <= n2 ? 0 : o2[s + 4 * r] - o2[s + 4 * n2] * h;
            while (--a);
          }
      } while (--l);
      if (e2.z = o2[11] / o2[10], e2.y = (o2[7] - o2[6] * e2.z) / o2[5], e2.x = (o2[3] - o2[2] * e2.z - o2[1] * e2.y) / o2[0], isNaN(e2.x) || isNaN(e2.y) || isNaN(e2.z) || e2.x === 1 / 0 || e2.y === 1 / 0 || e2.z === 1 / 0)
        throw "Could not solve equation! Got x=[" + e2.toString() + "], b=[" + t3.toString() + "], A=[" + this.toString() + "]";
      return e2;
    }, n.prototype.e = function(t3, e2, o2) {
      if (void 0 === o2)
        return this.elements[e2 + 3 * t3];
      this.elements[e2 + 3 * t3] = o2;
    }, n.prototype.copy = function(t3) {
      for (var e2 = 0; e2 < t3.elements.length; e2++)
        this.elements[e2] = t3.elements[e2];
      return this;
    }, n.prototype.toString = function() {
      for (var t3 = "", e2 = 0; e2 < 9; e2++)
        t3 += this.elements[e2] + ",";
      return t3;
    }, n.prototype.reverse = function(t3) {
      t3 = t3 || new n();
      for (var e2 = [], o2 = 0; o2 < 18; o2++)
        e2.push(0);
      for (o2 = 0; o2 < 3; o2++)
        for (s = 0; s < 3; s++)
          e2[o2 + 6 * s] = this.elements[o2 + 3 * s];
      e2[3] = 1, e2[9] = 0, e2[15] = 0, e2[4] = 0, e2[10] = 1, e2[16] = 0, e2[5] = 0, e2[11] = 0, e2[17] = 1;
      var i2, o2, s, r, a = 3;
      do {
        if (0 === e2[(o2 = 3 - a) + 6 * o2]) {
          for (s = o2 + 1; s < 3; s++)
            if (0 !== e2[o2 + 6 * s]) {
              r = 6;
              do
                i2 = 6 - r, e2[i2 + 6 * o2] += e2[i2 + 6 * s];
              while (--r);
              break;
            }
        }
        if (0 !== e2[o2 + 6 * o2])
          for (s = o2 + 1; s < 3; s++) {
            var l = e2[o2 + 6 * s] / e2[o2 + 6 * o2];
            r = 6;
            do
              e2[(i2 = 6 - r) + 6 * s] = i2 <= o2 ? 0 : e2[i2 + 6 * s] - e2[i2 + 6 * o2] * l;
            while (--r);
          }
      } while (--a);
      o2 = 2;
      do {
        s = o2 - 1;
        do {
          var l = e2[o2 + 6 * s] / e2[o2 + 6 * o2];
          r = 6;
          do
            e2[(i2 = 6 - r) + 6 * s] = e2[i2 + 6 * s] - e2[i2 + 6 * o2] * l;
          while (--r);
        } while (s--);
      } while (--o2);
      o2 = 2;
      do {
        var l = 1 / e2[o2 + 6 * o2];
        r = 6;
        do
          e2[(i2 = 6 - r) + 6 * o2] = e2[i2 + 6 * o2] * l;
        while (--r);
      } while (o2--);
      o2 = 2;
      do {
        s = 2;
        do {
          if (isNaN(i2 = e2[3 + s + 6 * o2]) || i2 === 1 / 0)
            throw "Could not reverse! A=[" + this.toString() + "]";
          t3.e(o2, s, i2);
        } while (s--);
      } while (o2--);
      return t3;
    }, n.prototype.setRotationFromQuaternion = function(t3) {
      var e2 = t3.x, o2 = t3.y, i2 = t3.z, n2 = t3.w, s = e2 + e2, r = o2 + o2, a = i2 + i2, l = e2 * s, h = e2 * r, p = e2 * a, c = o2 * r, u = o2 * a, d = i2 * a, v = n2 * s, y = n2 * r, f = n2 * a, m = this.elements;
      return m[0] = 1 - (c + d), m[1] = h - f, m[2] = p + y, m[3] = h + f, m[4] = 1 - (l + d), m[5] = u - v, m[6] = p - y, m[7] = u + v, m[8] = 1 - (l + c), this;
    }, n.prototype.transpose = function(t3) {
      for (var e2 = (t3 = t3 || new n()).elements, o2 = this.elements, i2 = 0; 3 !== i2; i2++)
        for (var s = 0; 3 !== s; s++)
          e2[3 * i2 + s] = o2[3 * s + i2];
      return t3;
    };
  }, { "./Vec3": 30 }], 28: [function(t2, e, o) {
    e.exports = n;
    var i = t2("./Vec3");
    function n(t3, e2, o2, i2) {
      this.x = void 0 !== t3 ? t3 : 0, this.y = void 0 !== e2 ? e2 : 0, this.z = void 0 !== o2 ? o2 : 0, this.w = void 0 !== i2 ? i2 : 1;
    }
    n.prototype.set = function(t3, e2, o2, i2) {
      this.x = t3, this.y = e2, this.z = o2, this.w = i2;
    }, n.prototype.toString = function() {
      return this.x + "," + this.y + "," + this.z + "," + this.w;
    }, n.prototype.toArray = function() {
      return [this.x, this.y, this.z, this.w];
    }, n.prototype.setFromAxisAngle = function(t3, e2) {
      var o2 = Math.sin(0.5 * e2);
      this.x = t3.x * o2, this.y = t3.y * o2, this.z = t3.z * o2, this.w = Math.cos(0.5 * e2);
    }, n.prototype.toAxisAngle = function(t3) {
      t3 = t3 || new i(), this.normalize();
      var e2 = 2 * Math.acos(this.w), o2 = Math.sqrt(1 - this.w * this.w);
      return o2 < 1e-3 ? (t3.x = this.x, t3.y = this.y, t3.z = this.z) : (t3.x = this.x / o2, t3.y = this.y / o2, t3.z = this.z / o2), [t3, e2];
    };
    var s = new i(), r = new i();
    n.prototype.setFromVectors = function(t3, e2) {
      if (t3.isAntiparallelTo(e2))
        t3.tangents(s, r), this.setFromAxisAngle(s, Math.PI);
      else {
        var o2 = t3.cross(e2);
        this.x = o2.x, this.y = o2.y, this.z = o2.z, this.w = Math.sqrt(Math.pow(t3.norm(), 2) * Math.pow(e2.norm(), 2)) + t3.dot(e2), this.normalize();
      }
    };
    var a = new i(), l = new i(), h = new i();
    n.prototype.mult = function(t3, e2) {
      e2 = e2 || new n();
      var o2 = this.w;
      return a.set(this.x, this.y, this.z), l.set(t3.x, t3.y, t3.z), e2.w = o2 * t3.w - a.dot(l), a.cross(l, h), e2.x = o2 * l.x + t3.w * a.x + h.x, e2.y = o2 * l.y + t3.w * a.y + h.y, e2.z = o2 * l.z + t3.w * a.z + h.z, e2;
    }, n.prototype.inverse = function(t3) {
      var e2 = this.x, o2 = this.y, i2 = this.z, s2 = this.w;
      t3 = t3 || new n(), this.conjugate(t3);
      var r2 = 1 / (e2 * e2 + o2 * o2 + i2 * i2 + s2 * s2);
      return t3.x *= r2, t3.y *= r2, t3.z *= r2, t3.w *= r2, t3;
    }, n.prototype.conjugate = function(t3) {
      return (t3 = t3 || new n()).x = -this.x, t3.y = -this.y, t3.z = -this.z, t3.w = this.w, t3;
    }, n.prototype.normalize = function() {
      var t3 = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
      0 === t3 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t3 = 1 / t3, this.x *= t3, this.y *= t3, this.z *= t3, this.w *= t3);
    }, n.prototype.normalizeFast = function() {
      var t3 = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
      0 === t3 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t3, this.y *= t3, this.z *= t3, this.w *= t3);
    }, n.prototype.vmult = function(t3, e2) {
      e2 = e2 || new i();
      var o2 = t3.x, n2 = t3.y, s2 = t3.z, r2 = this.x, a2 = this.y, l2 = this.z, h2 = this.w, p = h2 * o2 + a2 * s2 - l2 * n2, c = h2 * n2 + l2 * o2 - r2 * s2, u = h2 * s2 + r2 * n2 - a2 * o2, d = -r2 * o2 - a2 * n2 - l2 * s2;
      return e2.x = p * h2 + -(d * r2) + -(c * l2) - -(u * a2), e2.y = c * h2 + -(d * a2) + -(u * r2) - -(p * l2), e2.z = u * h2 + -(d * l2) + -(p * a2) - -(c * r2), e2;
    }, n.prototype.copy = function(t3) {
      return this.x = t3.x, this.y = t3.y, this.z = t3.z, this.w = t3.w, this;
    }, n.prototype.toEuler = function(t3, e2) {
      e2 = e2 || "YZX";
      var o2, i2, n2, s2 = this.x, r2 = this.y, a2 = this.z, l2 = this.w;
      if ("YZX" === e2) {
        var h2 = s2 * r2 + a2 * l2;
        if (h2 > 0.499 && (o2 = 2 * Math.atan2(s2, l2), i2 = Math.PI / 2, n2 = 0), h2 < -0.499 && (o2 = -2 * Math.atan2(s2, l2), i2 = -Math.PI / 2, n2 = 0), isNaN(o2)) {
          var p = a2 * a2;
          o2 = Math.atan2(2 * r2 * l2 - 2 * s2 * a2, 1 - 2 * (r2 * r2) - 2 * p), i2 = Math.asin(2 * h2), n2 = Math.atan2(2 * s2 * l2 - 2 * r2 * a2, 1 - 2 * (s2 * s2) - 2 * p);
        }
      } else
        throw Error("Euler order " + e2 + " not supported yet.");
      t3.y = o2, t3.z = i2, t3.x = n2;
    }, n.prototype.setFromEuler = function(t3, e2, o2, i2) {
      var n2 = Math.cos(t3 / 2), s2 = Math.cos(e2 / 2), r2 = Math.cos(o2 / 2), a2 = Math.sin(t3 / 2), l2 = Math.sin(e2 / 2), h2 = Math.sin(o2 / 2);
      return "XYZ" === (i2 = i2 || "XYZ") ? (this.x = a2 * s2 * r2 + n2 * l2 * h2, this.y = n2 * l2 * r2 - a2 * s2 * h2, this.z = n2 * s2 * h2 + a2 * l2 * r2, this.w = n2 * s2 * r2 - a2 * l2 * h2) : "YXZ" === i2 ? (this.x = a2 * s2 * r2 + n2 * l2 * h2, this.y = n2 * l2 * r2 - a2 * s2 * h2, this.z = n2 * s2 * h2 - a2 * l2 * r2, this.w = n2 * s2 * r2 + a2 * l2 * h2) : "ZXY" === i2 ? (this.x = a2 * s2 * r2 - n2 * l2 * h2, this.y = n2 * l2 * r2 + a2 * s2 * h2, this.z = n2 * s2 * h2 + a2 * l2 * r2, this.w = n2 * s2 * r2 - a2 * l2 * h2) : "ZYX" === i2 ? (this.x = a2 * s2 * r2 - n2 * l2 * h2, this.y = n2 * l2 * r2 + a2 * s2 * h2, this.z = n2 * s2 * h2 - a2 * l2 * r2, this.w = n2 * s2 * r2 + a2 * l2 * h2) : "YZX" === i2 ? (this.x = a2 * s2 * r2 + n2 * l2 * h2, this.y = n2 * l2 * r2 + a2 * s2 * h2, this.z = n2 * s2 * h2 - a2 * l2 * r2, this.w = n2 * s2 * r2 - a2 * l2 * h2) : "XZY" === i2 && (this.x = a2 * s2 * r2 - n2 * l2 * h2, this.y = n2 * l2 * r2 - a2 * s2 * h2, this.z = n2 * s2 * h2 + a2 * l2 * r2, this.w = n2 * s2 * r2 + a2 * l2 * h2), this;
    }, n.prototype.clone = function() {
      return new n(this.x, this.y, this.z, this.w);
    };
  }, { "./Vec3": 30 }], 29: [function(t2, e, o) {
    var i = t2("./Vec3"), n = t2("./Quaternion");
    function s(t3) {
      t3 = t3 || {}, this.position = new i(), t3.position && this.position.copy(t3.position), this.quaternion = new n(), t3.quaternion && this.quaternion.copy(t3.quaternion);
    }
    e.exports = s;
    var r = new n();
    s.pointToLocalFrame = function(t3, e2, o2, n2) {
      var n2 = n2 || new i();
      return o2.vsub(t3, n2), e2.conjugate(r), r.vmult(n2, n2), n2;
    }, s.prototype.pointToLocal = function(t3, e2) {
      return s.pointToLocalFrame(this.position, this.quaternion, t3, e2);
    }, s.pointToWorldFrame = function(t3, e2, o2, n2) {
      var n2 = n2 || new i();
      return e2.vmult(o2, n2), n2.vadd(t3, n2), n2;
    }, s.prototype.pointToWorld = function(t3, e2) {
      return s.pointToWorldFrame(this.position, this.quaternion, t3, e2);
    }, s.prototype.vectorToWorldFrame = function(t3, e2) {
      var e2 = e2 || new i();
      return this.quaternion.vmult(t3, e2), e2;
    }, s.vectorToWorldFrame = function(t3, e2, o2) {
      return t3.vmult(e2, o2), o2;
    }, s.vectorToLocalFrame = function(t3, e2, o2, n2) {
      var n2 = n2 || new i();
      return e2.w *= -1, e2.vmult(o2, n2), e2.w *= -1, n2;
    };
  }, { "./Quaternion": 28, "./Vec3": 30 }], 30: [function(t2, e, o) {
    e.exports = n;
    var i = t2("./Mat3");
    function n(t3, e2, o2) {
      this.x = t3 || 0, this.y = e2 || 0, this.z = o2 || 0;
    }
    n.ZERO = new n(0, 0, 0), n.UNIT_X = new n(1, 0, 0), n.UNIT_Y = new n(0, 1, 0), n.UNIT_Z = new n(0, 0, 1), n.prototype.cross = function(t3, e2) {
      var o2 = t3.x, i2 = t3.y, s2 = t3.z, r2 = this.x, a2 = this.y, l = this.z;
      return (e2 = e2 || new n()).x = a2 * s2 - l * i2, e2.y = l * o2 - r2 * s2, e2.z = r2 * i2 - a2 * o2, e2;
    }, n.prototype.set = function(t3, e2, o2) {
      return this.x = t3, this.y = e2, this.z = o2, this;
    }, n.prototype.setZero = function() {
      this.x = this.y = this.z = 0;
    }, n.prototype.vadd = function(t3, e2) {
      if (!e2)
        return new n(this.x + t3.x, this.y + t3.y, this.z + t3.z);
      e2.x = t3.x + this.x, e2.y = t3.y + this.y, e2.z = t3.z + this.z;
    }, n.prototype.vsub = function(t3, e2) {
      if (!e2)
        return new n(this.x - t3.x, this.y - t3.y, this.z - t3.z);
      e2.x = this.x - t3.x, e2.y = this.y - t3.y, e2.z = this.z - t3.z;
    }, n.prototype.crossmat = function() {
      return new i([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]);
    }, n.prototype.normalize = function() {
      var t3 = this.x, e2 = this.y, o2 = this.z, i2 = Math.sqrt(t3 * t3 + e2 * e2 + o2 * o2);
      if (i2 > 0) {
        var n2 = 1 / i2;
        this.x *= n2, this.y *= n2, this.z *= n2;
      } else
        this.x = 0, this.y = 0, this.z = 0;
      return i2;
    }, n.prototype.unit = function(t3) {
      t3 = t3 || new n();
      var e2 = this.x, o2 = this.y, i2 = this.z, s2 = Math.sqrt(e2 * e2 + o2 * o2 + i2 * i2);
      return s2 > 0 ? (s2 = 1 / s2, t3.x = e2 * s2, t3.y = o2 * s2, t3.z = i2 * s2) : (t3.x = 1, t3.y = 0, t3.z = 0), t3;
    }, n.prototype.norm = function() {
      var t3 = this.x, e2 = this.y, o2 = this.z;
      return Math.sqrt(t3 * t3 + e2 * e2 + o2 * o2);
    }, n.prototype.length = n.prototype.norm, n.prototype.norm2 = function() {
      return this.dot(this);
    }, n.prototype.lengthSquared = n.prototype.norm2, n.prototype.distanceTo = function(t3) {
      var e2 = this.x, o2 = this.y, i2 = this.z, n2 = t3.x, s2 = t3.y, r2 = t3.z;
      return Math.sqrt((n2 - e2) * (n2 - e2) + (s2 - o2) * (s2 - o2) + (r2 - i2) * (r2 - i2));
    }, n.prototype.distanceSquared = function(t3) {
      var e2 = this.x, o2 = this.y, i2 = this.z, n2 = t3.x, s2 = t3.y, r2 = t3.z;
      return (n2 - e2) * (n2 - e2) + (s2 - o2) * (s2 - o2) + (r2 - i2) * (r2 - i2);
    }, n.prototype.mult = function(t3, e2) {
      e2 = e2 || new n();
      var o2 = this.x, i2 = this.y, s2 = this.z;
      return e2.x = t3 * o2, e2.y = t3 * i2, e2.z = t3 * s2, e2;
    }, n.prototype.scale = n.prototype.mult, n.prototype.dot = function(t3) {
      return this.x * t3.x + this.y * t3.y + this.z * t3.z;
    }, n.prototype.isZero = function() {
      return 0 === this.x && 0 === this.y && 0 === this.z;
    }, n.prototype.negate = function(t3) {
      return (t3 = t3 || new n()).x = -this.x, t3.y = -this.y, t3.z = -this.z, t3;
    };
    var s = new n(), r = new n();
    n.prototype.tangents = function(t3, e2) {
      var o2 = this.norm();
      if (o2 > 0) {
        var i2 = 1 / o2;
        s.set(this.x * i2, this.y * i2, this.z * i2), 0.9 > Math.abs(s.x) ? (r.set(1, 0, 0), s.cross(r, t3)) : (r.set(0, 1, 0), s.cross(r, t3)), s.cross(t3, e2);
      } else
        t3.set(1, 0, 0), e2.set(0, 1, 0);
    }, n.prototype.toString = function() {
      return this.x + "," + this.y + "," + this.z;
    }, n.prototype.toArray = function() {
      return [this.x, this.y, this.z];
    }, n.prototype.copy = function(t3) {
      return this.x = t3.x, this.y = t3.y, this.z = t3.z, this;
    }, n.prototype.lerp = function(t3, e2, o2) {
      var i2 = this.x, n2 = this.y, s2 = this.z;
      o2.x = i2 + (t3.x - i2) * e2, o2.y = n2 + (t3.y - n2) * e2, o2.z = s2 + (t3.z - s2) * e2;
    }, n.prototype.almostEquals = function(t3, e2) {
      return void 0 === e2 && (e2 = 1e-6), !(Math.abs(this.x - t3.x) > e2 || Math.abs(this.y - t3.y) > e2 || Math.abs(this.z - t3.z) > e2);
    }, n.prototype.almostZero = function(t3) {
      return void 0 === t3 && (t3 = 1e-6), !(Math.abs(this.x) > t3 || Math.abs(this.y) > t3 || Math.abs(this.z) > t3);
    };
    var a = new n();
    n.prototype.isAntiparallelTo = function(t3, e2) {
      return this.negate(a), a.almostEquals(t3, e2);
    }, n.prototype.clone = function() {
      return new n(this.x, this.y, this.z);
    };
  }, { "./Mat3": 27 }], 31: [function(t2, e, o) {
    e.exports = h;
    var i = t2("../utils/EventTarget");
    t2("../shapes/Shape");
    var n = t2("../math/Vec3"), s = t2("../math/Mat3"), r = t2("../math/Quaternion");
    t2("../material/Material");
    var a = t2("../collision/AABB"), l = t2("../shapes/Box");
    function h(t3) {
      t3 = t3 || {}, i.apply(this), this.id = h.idCounter++, this.world = null, this.preStep = null, this.postStep = null, this.vlambda = new n(), this.collisionFilterGroup = "number" == typeof t3.collisionFilterGroup ? t3.collisionFilterGroup : 1, this.collisionFilterMask = "number" == typeof t3.collisionFilterMask ? t3.collisionFilterMask : 1, this.collisionResponse = true, this.position = new n(), t3.position && this.position.copy(t3.position), this.previousPosition = new n(), this.initPosition = new n(), this.velocity = new n(), t3.velocity && this.velocity.copy(t3.velocity), this.initVelocity = new n(), this.force = new n();
      var e2 = "number" == typeof t3.mass ? t3.mass : 0;
      this.mass = e2, this.invMass = e2 > 0 ? 1 / e2 : 0, this.material = t3.material || null, this.linearDamping = "number" == typeof t3.linearDamping ? t3.linearDamping : 0.01, this.type = e2 <= 0 ? h.STATIC : h.DYNAMIC, typeof t3.type == typeof h.STATIC && (this.type = t3.type), this.allowSleep = void 0 === t3.allowSleep || t3.allowSleep, this.sleepState = 0, this.sleepSpeedLimit = void 0 !== t3.sleepSpeedLimit ? t3.sleepSpeedLimit : 0.1, this.sleepTimeLimit = void 0 !== t3.sleepTimeLimit ? t3.sleepTimeLimit : 1, this.timeLastSleepy = 0, this._wakeUpAfterNarrowphase = false, this.torque = new n(), this.quaternion = new r(), t3.quaternion && this.quaternion.copy(t3.quaternion), this.initQuaternion = new r(), this.angularVelocity = new n(), t3.angularVelocity && this.angularVelocity.copy(t3.angularVelocity), this.initAngularVelocity = new n(), this.interpolatedPosition = new n(), this.interpolatedQuaternion = new r(), this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new n(), this.invInertia = new n(), this.invInertiaWorld = new s(), this.invMassSolve = 0, this.invInertiaSolve = new n(), this.invInertiaWorldSolve = new s(), this.fixedRotation = void 0 !== t3.fixedRotation && t3.fixedRotation, this.angularDamping = void 0 !== t3.angularDamping ? t3.angularDamping : 0.01, this.aabb = new a(), this.aabbNeedsUpdate = true, this.wlambda = new n(), t3.shape && this.addShape(t3.shape), this.updateMassProperties();
    }
    h.prototype = new i(), h.prototype.constructor = h, h.DYNAMIC = 1, h.STATIC = 2, h.KINEMATIC = 4, h.AWAKE = 0, h.SLEEPY = 1, h.SLEEPING = 2, h.idCounter = 0, h.prototype.wakeUp = function() {
      var t3 = this.sleepState;
      this.sleepState = 0, t3 === h.SLEEPING && this.dispatchEvent({ type: "wakeup" });
    }, h.prototype.sleep = function() {
      this.sleepState = h.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0);
    }, h.sleepyEvent = { type: "sleepy" }, h.sleepEvent = { type: "sleep" }, h.prototype.sleepTick = function(t3) {
      if (this.allowSleep) {
        var e2 = this.sleepState, o2 = this.velocity.norm2() + this.angularVelocity.norm2(), i2 = Math.pow(this.sleepSpeedLimit, 2);
        e2 === h.AWAKE && o2 < i2 ? (this.sleepState = h.SLEEPY, this.timeLastSleepy = t3, this.dispatchEvent(h.sleepyEvent)) : e2 === h.SLEEPY && o2 > i2 ? this.wakeUp() : e2 === h.SLEEPY && t3 - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(h.sleepEvent));
      }
    }, h.prototype.updateSolveMassProperties = function() {
      this.sleepState === h.SLEEPING || this.type === h.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld));
    }, h.prototype.pointToLocalFrame = function(t3, e2) {
      var e2 = e2 || new n();
      return t3.vsub(this.position, e2), this.quaternion.conjugate().vmult(e2, e2), e2;
    }, h.prototype.vectorToLocalFrame = function(t3, e2) {
      var e2 = e2 || new n();
      return this.quaternion.conjugate().vmult(t3, e2), e2;
    }, h.prototype.pointToWorldFrame = function(t3, e2) {
      var e2 = e2 || new n();
      return this.quaternion.vmult(t3, e2), e2.vadd(this.position, e2), e2;
    }, h.prototype.vectorToWorldFrame = function(t3, e2) {
      var e2 = e2 || new n();
      return this.quaternion.vmult(t3, e2), e2;
    };
    var p = new n(), c = new r();
    h.prototype.addShape = function(t3, e2, o2) {
      var i2 = new n(), s2 = new r();
      return e2 && i2.copy(e2), o2 && s2.copy(o2), this.shapes.push(t3), this.shapeOffsets.push(i2), this.shapeOrientations.push(s2), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = true, this;
    }, h.prototype.updateBoundingRadius = function() {
      for (var t3 = this.shapes, e2 = this.shapeOffsets, o2 = t3.length, i2 = 0, n2 = 0; n2 !== o2; n2++) {
        var s2 = t3[n2];
        s2.updateBoundingSphereRadius();
        var r2 = e2[n2].norm(), a2 = s2.boundingSphereRadius;
        r2 + a2 > i2 && (i2 = r2 + a2);
      }
      this.boundingRadius = i2;
    };
    var u = new a();
    h.prototype.computeAABB = function() {
      for (var t3 = this.shapes, e2 = this.shapeOffsets, o2 = this.shapeOrientations, i2 = t3.length, n2 = this.quaternion, s2 = this.aabb, r2 = 0; r2 !== i2; r2++) {
        var a2 = t3[r2];
        o2[r2].mult(n2, c), c.vmult(e2[r2], p), p.vadd(this.position, p), a2.calculateWorldAABB(p, c, u.lowerBound, u.upperBound), 0 === r2 ? s2.copy(u) : s2.extend(u);
      }
      this.aabbNeedsUpdate = false;
    };
    var d = new s(), v = new s();
    new s(), h.prototype.updateInertiaWorld = function(t3) {
      var e2 = this.invInertia;
      (e2.x !== e2.y || e2.y !== e2.z || t3) && (d.setRotationFromQuaternion(this.quaternion), d.transpose(v), d.scale(e2, d), d.mmult(v, this.invInertiaWorld));
    };
    var y = new n(), f = new n();
    h.prototype.applyForce = function(t3, e2) {
      this.type === h.DYNAMIC && (e2.vsub(this.position, y), y.cross(t3, f), this.force.vadd(t3, this.force), this.torque.vadd(f, this.torque));
    };
    var m = new n(), w = new n();
    h.prototype.applyLocalForce = function(t3, e2) {
      this.type === h.DYNAMIC && (this.vectorToWorldFrame(t3, m), this.pointToWorldFrame(e2, w), this.applyForce(m, w));
    };
    var x = new n(), g = new n(), b = new n();
    h.prototype.applyImpulse = function(t3, e2) {
      this.type === h.DYNAMIC && (e2.vsub(this.position, x), g.copy(t3), g.mult(this.invMass, g), this.velocity.vadd(g, this.velocity), x.cross(t3, b), this.invInertiaWorld.vmult(b, b), this.angularVelocity.vadd(b, this.angularVelocity));
    };
    var B = new n(), E = new n();
    h.prototype.applyLocalImpulse = function(t3, e2) {
      this.type === h.DYNAMIC && (this.vectorToWorldFrame(t3, B), this.pointToWorldFrame(e2, E), this.applyImpulse(B, E));
    };
    var A = new n();
    h.prototype.updateMassProperties = function() {
      this.invMass = this.mass > 0 ? 1 / this.mass : 0;
      var t3 = this.inertia, e2 = this.fixedRotation;
      this.computeAABB(), A.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), l.calculateInertia(A, this.mass, t3), this.invInertia.set(t3.x > 0 && !e2 ? 1 / t3.x : 0, t3.y > 0 && !e2 ? 1 / t3.y : 0, t3.z > 0 && !e2 ? 1 / t3.z : 0), this.updateInertiaWorld(true);
    }, h.prototype.getVelocityAtWorldPoint = function(t3, e2) {
      var o2 = new n();
      return t3.vsub(this.position, o2), this.angularVelocity.cross(o2, e2), this.velocity.vadd(e2, e2), e2;
    };
  }, { "../collision/AABB": 3, "../material/Material": 25, "../math/Mat3": 27, "../math/Quaternion": 28, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Shape": 43, "../utils/EventTarget": 49 }], 32: [function(t2, e, o) {
    t2("./Body");
    var i = t2("../math/Vec3"), n = t2("../math/Quaternion");
    t2("../collision/RaycastResult");
    var s = t2("../collision/Ray"), r = t2("../objects/WheelInfo");
    function a(t3) {
      this.chassisBody = t3.chassisBody, this.wheelInfos = [], this.sliding = false, this.world = null, this.indexRightAxis = void 0 !== t3.indexRightAxis ? t3.indexRightAxis : 1, this.indexForwardAxis = void 0 !== t3.indexForwardAxis ? t3.indexForwardAxis : 0, this.indexUpAxis = void 0 !== t3.indexUpAxis ? t3.indexUpAxis : 2;
    }
    e.exports = a, new i(), new i(), new i();
    var l = new i(), h = new i(), p = new i();
    new s(), a.prototype.addWheel = function(t3) {
      t3 = t3 || {};
      var e2 = new r(t3), o2 = this.wheelInfos.length;
      return this.wheelInfos.push(e2), o2;
    }, a.prototype.setSteeringValue = function(t3, e2) {
      this.wheelInfos[e2].steering = t3;
    }, new i(), a.prototype.applyEngineForce = function(t3, e2) {
      this.wheelInfos[e2].engineForce = t3;
    }, a.prototype.setBrake = function(t3, e2) {
      this.wheelInfos[e2].brake = t3;
    }, a.prototype.addToWorld = function(t3) {
      this.constraints, t3.add(this.chassisBody);
      var e2 = this;
      this.preStepCallback = function() {
        e2.updateVehicle(t3.dt);
      }, t3.addEventListener("preStep", this.preStepCallback), this.world = t3;
    }, a.prototype.getVehicleAxisWorld = function(t3, e2) {
      e2.set(0 === t3 ? 1 : 0, 1 === t3 ? 1 : 0, 2 === t3 ? 1 : 0), this.chassisBody.vectorToWorldFrame(e2, e2);
    }, a.prototype.updateVehicle = function(t3) {
      for (var e2 = this.wheelInfos, o2 = e2.length, n2 = this.chassisBody, s2 = 0; s2 < o2; s2++)
        this.updateWheelTransform(s2);
      this.currentVehicleSpeedKmHour = 3.6 * n2.velocity.norm();
      var r2 = new i();
      this.getVehicleAxisWorld(this.indexForwardAxis, r2), 0 > r2.dot(n2.velocity) && (this.currentVehicleSpeedKmHour *= -1);
      for (var s2 = 0; s2 < o2; s2++)
        this.castRay(e2[s2]);
      this.updateSuspension(t3);
      for (var a2 = new i(), l2 = new i(), s2 = 0; s2 < o2; s2++) {
        var h2 = e2[s2], p2 = h2.suspensionForce;
        p2 > h2.maxSuspensionForce && (p2 = h2.maxSuspensionForce), h2.raycastResult.hitNormalWorld.scale(p2 * t3, a2), h2.raycastResult.hitPointWorld.vsub(n2.position, l2), n2.applyImpulse(a2, h2.raycastResult.hitPointWorld);
      }
      this.updateFriction(t3);
      var c2 = new i(), u2 = new i(), d2 = new i();
      for (s2 = 0; s2 < o2; s2++) {
        var h2 = e2[s2];
        n2.getVelocityAtWorldPoint(h2.chassisConnectionPointWorld, d2);
        var v2 = 1;
        if (1 === this.indexUpAxis && (v2 = -1), h2.isInContact) {
          this.getVehicleAxisWorld(this.indexForwardAxis, u2);
          var y2 = u2.dot(h2.raycastResult.hitNormalWorld);
          h2.raycastResult.hitNormalWorld.scale(y2, c2), u2.vsub(c2, u2);
          var f2 = u2.dot(d2);
          h2.deltaRotation = v2 * f2 * t3 / h2.radius;
        }
        (h2.sliding || !h2.isInContact) && 0 !== h2.engineForce && h2.useCustomSlidingRotationalSpeed && (h2.deltaRotation = (h2.engineForce > 0 ? 1 : -1) * h2.customSlidingRotationalSpeed * t3), Math.abs(h2.brake) > Math.abs(h2.engineForce) && (h2.deltaRotation = 0), h2.rotation += h2.deltaRotation, h2.deltaRotation *= 0.99;
      }
    }, a.prototype.updateSuspension = function(t3) {
      for (var e2 = this.chassisBody.mass, o2 = this.wheelInfos, i2 = o2.length, n2 = 0; n2 < i2; n2++) {
        var s2 = o2[n2];
        if (s2.isInContact) {
          var r2, a2 = s2.suspensionRestLength - s2.suspensionLength;
          r2 = s2.suspensionStiffness * a2 * s2.clippedInvContactDotSuspension;
          var l2 = s2.suspensionRelativeVelocity;
          r2 -= (l2 < 0 ? s2.dampingCompression : s2.dampingRelaxation) * l2, s2.suspensionForce = r2 * e2, s2.suspensionForce < 0 && (s2.suspensionForce = 0);
        } else
          s2.suspensionForce = 0;
      }
    }, a.prototype.removeFromWorld = function(t3) {
      this.constraints, t3.remove(this.chassisBody), t3.removeEventListener("preStep", this.preStepCallback), this.world = null;
    };
    var c = new i(), u = new i();
    a.prototype.castRay = function(t3) {
      this.updateWheelTransformWorld(t3);
      var e2 = this.chassisBody, o2 = -1, n2 = t3.suspensionRestLength + t3.radius;
      t3.directionWorld.scale(n2, c);
      var s2 = t3.chassisConnectionPointWorld;
      s2.vadd(c, u);
      var r2 = t3.raycastResult;
      r2.reset();
      var a2 = e2.collisionResponse;
      e2.collisionResponse = false, this.world.rayTest(s2, u, r2), e2.collisionResponse = a2;
      var l2 = r2.body;
      if (t3.raycastResult.groundObject = 0, l2) {
        o2 = r2.distance, t3.raycastResult.hitNormalWorld = r2.hitNormalWorld, t3.isInContact = true;
        var h2 = r2.distance;
        t3.suspensionLength = h2 - t3.radius;
        var p2 = t3.suspensionRestLength - t3.maxSuspensionTravel, d2 = t3.suspensionRestLength + t3.maxSuspensionTravel;
        t3.suspensionLength < p2 && (t3.suspensionLength = p2), t3.suspensionLength > d2 && (t3.suspensionLength = d2, t3.raycastResult.reset());
        var v2 = t3.raycastResult.hitNormalWorld.dot(t3.directionWorld), y2 = new i();
        e2.getVelocityAtWorldPoint(t3.raycastResult.hitPointWorld, y2);
        var f2 = t3.raycastResult.hitNormalWorld.dot(y2);
        if (v2 >= -0.1)
          t3.suspensionRelativeVelocity = 0, t3.clippedInvContactDotSuspension = 10;
        else {
          var m2 = -1 / v2;
          t3.suspensionRelativeVelocity = f2 * m2, t3.clippedInvContactDotSuspension = m2;
        }
      } else
        t3.suspensionLength = t3.suspensionRestLength + 0 * t3.maxSuspensionTravel, t3.suspensionRelativeVelocity = 0, t3.directionWorld.scale(-1, t3.raycastResult.hitNormalWorld), t3.clippedInvContactDotSuspension = 1;
      return o2;
    }, a.prototype.updateWheelTransformWorld = function(t3) {
      t3.isInContact = false;
      var e2 = this.chassisBody;
      e2.pointToWorldFrame(t3.chassisConnectionPointLocal, t3.chassisConnectionPointWorld), e2.vectorToWorldFrame(t3.directionLocal, t3.directionWorld), e2.vectorToWorldFrame(t3.axleLocal, t3.axleWorld);
    }, a.prototype.updateWheelTransform = function(t3) {
      var e2 = this.wheelInfos[t3];
      this.updateWheelTransformWorld(e2), e2.directionLocal.scale(-1, l), h.copy(e2.axleLocal), l.cross(h, p), p.normalize(), h.normalize();
      var o2 = e2.steering, i2 = new n();
      i2.setFromAxisAngle(l, o2);
      var s2 = new n();
      s2.setFromAxisAngle(h, e2.rotation);
      var r2 = e2.worldTransform.quaternion;
      this.chassisBody.quaternion.mult(i2, r2), r2.mult(s2, r2), r2.normalize();
      var a2 = e2.worldTransform.position;
      a2.copy(e2.directionWorld), a2.scale(e2.suspensionLength, a2), a2.vadd(e2.chassisConnectionPointWorld, a2);
    };
    var d = [new i(1, 0, 0), new i(0, 1, 0), new i(0, 0, 1)];
    a.prototype.getWheelTransformWorld = function(t3) {
      return this.wheelInfos[t3].worldTransform;
    };
    var v = new i(), y = [], f = [];
    a.prototype.updateFriction = function(t3) {
      for (var e2 = this.wheelInfos, o2 = e2.length, n2 = this.chassisBody, s2 = 0; s2 < o2; s2++) {
        var r2 = e2[s2], a2 = r2.raycastResult.body;
        r2.sideImpulse = 0, r2.forwardImpulse = 0, f[s2] || (f[s2] = new i()), y[s2] || (y[s2] = new i());
      }
      for (var s2 = 0; s2 < o2; s2++) {
        var r2 = e2[s2], a2 = r2.raycastResult.body;
        if (a2) {
          var l2 = y[s2];
          this.getWheelTransformWorld(s2).vectorToWorldFrame(d[this.indexRightAxis], l2);
          var h2 = r2.raycastResult.hitNormalWorld, p2 = l2.dot(h2);
          h2.scale(p2, v), l2.vsub(v, l2), l2.normalize(), h2.cross(l2, f[s2]), f[s2].normalize(), r2.sideImpulse = function(t4, e3, o3, i2, n3, s3) {
            if (n3.norm2() > 1.1)
              return 0;
            t4.getVelocityAtWorldPoint(e3, S), o3.getVelocityAtWorldPoint(i2, C), S.vsub(C, z);
            var s3 = -0.2 * n3.dot(z) * (1 / (t4.invMass + o3.invMass));
            return s3;
          }(n2, r2.raycastResult.hitPointWorld, a2, r2.raycastResult.hitPointWorld, l2), r2.sideImpulse *= 1;
        }
      }
      this.sliding = false;
      for (var s2 = 0; s2 < o2; s2++) {
        var r2 = e2[s2], a2 = r2.raycastResult.body, c2 = 0;
        if (r2.slipInfo = 1, a2) {
          var u2 = r2.brake ? r2.brake : 0;
          c2 = function(t4, e3, o3, i2, n3) {
            var s3 = 0;
            return t4.getVelocityAtWorldPoint(o3, m), e3.getVelocityAtWorldPoint(o3, w), m.vsub(w, x), n3 < (s3 = -i2.dot(x) * (1 / (A(t4, o3, i2) + A(e3, o3, i2)))) && (s3 = n3), s3 < -n3 && (s3 = -n3), s3;
          }(n2, a2, r2.raycastResult.hitPointWorld, f[s2], u2) + r2.engineForce * t3;
          var g2 = u2 / c2;
          r2.slipInfo *= g2;
        }
        if (r2.forwardImpulse = 0, r2.skidInfo = 1, a2) {
          r2.skidInfo = 1;
          var b2 = r2.suspensionForce * t3 * r2.frictionSlip, B2 = b2 * b2;
          r2.forwardImpulse = c2;
          var E2 = 0.5 * r2.forwardImpulse, q = 1 * r2.sideImpulse, R = E2 * E2 + q * q;
          if (r2.sliding = false, R > B2) {
            this.sliding = true, r2.sliding = true;
            var g2 = b2 / Math.sqrt(R);
            r2.skidInfo *= g2;
          }
        }
      }
      if (this.sliding)
        for (var s2 = 0; s2 < o2; s2++) {
          var r2 = e2[s2];
          0 !== r2.sideImpulse && r2.skidInfo < 1 && (r2.forwardImpulse *= r2.skidInfo, r2.sideImpulse *= r2.skidInfo);
        }
      for (var s2 = 0; s2 < o2; s2++) {
        var r2 = e2[s2], M = new i();
        if (M.copy(r2.raycastResult.hitPointWorld), 0 !== r2.forwardImpulse) {
          var P = new i();
          f[s2].scale(r2.forwardImpulse, P), n2.applyImpulse(P, M);
        }
        if (0 !== r2.sideImpulse) {
          var a2 = r2.raycastResult.body, F = new i();
          F.copy(r2.raycastResult.hitPointWorld);
          var V = new i();
          y[s2].scale(r2.sideImpulse, V), n2.pointToLocalFrame(M, M), M["xyz"[this.indexUpAxis]] *= r2.rollInfluence, n2.pointToWorldFrame(M, M), n2.applyImpulse(V, M), V.scale(-1, V), a2.applyImpulse(V, F);
        }
      }
    };
    var m = new i(), w = new i(), x = new i(), g = new i(), b = new i(), B = new i(), E = new i();
    function A(t3, e2, o2) {
      return e2.vsub(t3.position, g), g.cross(o2, b), t3.invInertiaWorld.vmult(b, E), E.cross(g, B), t3.invMass + o2.dot(B);
    }
    var S = new i(), C = new i(), z = new i();
  }, { "../collision/Ray": 9, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/WheelInfo": 36, "./Body": 31 }], 33: [function(t2, e, o) {
    var i = t2("./Body"), n = t2("../shapes/Sphere"), s = t2("../shapes/Box"), r = t2("../math/Vec3"), a = t2("../constraints/HingeConstraint");
    function l(t3) {
      if (this.wheelBodies = [], this.coordinateSystem = void 0 === t3.coordinateSystem ? new r(1, 2, 3) : t3.coordinateSystem.clone(), this.chassisBody = t3.chassisBody, !this.chassisBody) {
        var e2 = new s(new r(5, 2, 0.5));
        this.chassisBody = new i(1, e2);
      }
      this.constraints = [], this.wheelAxes = [], this.wheelForces = [];
    }
    e.exports = l, l.prototype.addWheel = function(t3) {
      var e2 = (t3 = t3 || {}).body;
      e2 || (e2 = new i(1, new n(1.2))), this.wheelBodies.push(e2), this.wheelForces.push(0), new r();
      var o2 = void 0 !== t3.position ? t3.position.clone() : new r(), s2 = new r();
      this.chassisBody.pointToWorldFrame(o2, s2), e2.position.set(s2.x, s2.y, s2.z);
      var l2 = void 0 !== t3.axis ? t3.axis.clone() : new r(0, 1, 0);
      this.wheelAxes.push(l2);
      var h2 = new a(this.chassisBody, e2, { pivotA: o2, axisA: l2, pivotB: r.ZERO, axisB: l2, collideConnected: false });
      return this.constraints.push(h2), this.wheelBodies.length - 1;
    }, l.prototype.setSteeringValue = function(t3, e2) {
      var o2 = this.wheelAxes[e2], i2 = Math.cos(t3), n2 = Math.sin(t3), s2 = o2.x, r2 = o2.y;
      this.constraints[e2].axisA.set(i2 * s2 - n2 * r2, n2 * s2 + i2 * r2, 0);
    }, l.prototype.setMotorSpeed = function(t3, e2) {
      var o2 = this.constraints[e2];
      o2.enableMotor(), o2.motorTargetVelocity = t3;
    }, l.prototype.disableMotor = function(t3) {
      this.constraints[t3].disableMotor();
    };
    var h = new r();
    l.prototype.setWheelForce = function(t3, e2) {
      this.wheelForces[e2] = t3;
    }, l.prototype.applyWheelForce = function(t3, e2) {
      var o2 = this.wheelAxes[e2], i2 = this.wheelBodies[e2], n2 = i2.torque;
      o2.scale(t3, h), i2.vectorToWorldFrame(h, h), n2.vadd(h, n2);
    }, l.prototype.addToWorld = function(t3) {
      for (var e2 = this.constraints, o2 = this.wheelBodies.concat([this.chassisBody]), i2 = 0; i2 < o2.length; i2++)
        t3.add(o2[i2]);
      for (var i2 = 0; i2 < e2.length; i2++)
        t3.addConstraint(e2[i2]);
      t3.addEventListener("preStep", this._update.bind(this));
    }, l.prototype._update = function() {
      for (var t3 = this.wheelForces, e2 = 0; e2 < t3.length; e2++)
        this.applyWheelForce(t3[e2], e2);
    }, l.prototype.removeFromWorld = function(t3) {
      for (var e2 = this.constraints, o2 = this.wheelBodies.concat([this.chassisBody]), i2 = 0; i2 < o2.length; i2++)
        t3.remove(o2[i2]);
      for (var i2 = 0; i2 < e2.length; i2++)
        t3.removeConstraint(e2[i2]);
    };
    var p = new r();
    l.prototype.getWheelSpeed = function(t3) {
      var e2 = this.wheelAxes[t3], o2 = this.wheelBodies[t3].angularVelocity;
      return this.chassisBody.vectorToWorldFrame(e2, p), o2.dot(p);
    };
  }, { "../constraints/HingeConstraint": 15, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Sphere": 44, "./Body": 31 }], 34: [function(t2, e, o) {
    e.exports = n, t2("../shapes/Shape");
    var i = t2("../math/Vec3");
    function n() {
      this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, this.viscosity = 0.01, this.eps = 1e-6, this.pressures = [], this.densities = [], this.neighbors = [];
    }
    t2("../math/Quaternion"), t2("../shapes/Particle"), t2("../objects/Body"), t2("../material/Material"), n.prototype.add = function(t3) {
      this.particles.push(t3), this.neighbors.length < this.particles.length && this.neighbors.push([]);
    }, n.prototype.remove = function(t3) {
      var e2 = this.particles.indexOf(t3);
      -1 !== e2 && (this.particles.splice(e2, 1), this.neighbors.length > this.particles.length && this.neighbors.pop());
    };
    var s = new i();
    n.prototype.getNeighbors = function(t3, e2) {
      for (var o2 = this.particles.length, i2 = t3.id, n2 = this.smoothingRadius * this.smoothingRadius, r2 = 0; r2 !== o2; r2++) {
        var a2 = this.particles[r2];
        a2.position.vsub(t3.position, s), i2 !== a2.id && s.norm2() < n2 && e2.push(a2);
      }
    };
    var r = new i(), a = new i(), l = new i(), h = new i(), p = new i(), c = new i();
    n.prototype.update = function() {
      for (var t3 = this.particles.length, e2 = this.speedOfSound, o2 = this.eps, i2 = 0; i2 !== t3; i2++) {
        var n2 = this.particles[i2], s2 = this.neighbors[i2];
        s2.length = 0, this.getNeighbors(n2, s2), s2.push(this.particles[i2]);
        for (var u = s2.length, d = 0, v = 0; v !== u; v++) {
          n2.position.vsub(s2[v].position, r);
          var y = r.norm(), f = this.w(y);
          d += s2[v].mass * f;
        }
        this.densities[i2] = d, this.pressures[i2] = e2 * e2 * (this.densities[i2] - this.density);
      }
      for (var i2 = 0; i2 !== t3; i2++) {
        var m, w, x = this.particles[i2];
        a.set(0, 0, 0), l.set(0, 0, 0);
        for (var s2 = this.neighbors[i2], u = s2.length, v = 0; v !== u; v++) {
          var g = s2[v];
          x.position.vsub(g.position, p);
          var b = p.norm();
          m = -g.mass * (this.pressures[i2] / (this.densities[i2] * this.densities[i2] + o2) + this.pressures[v] / (this.densities[v] * this.densities[v] + o2)), this.gradw(p, h), h.mult(m, h), a.vadd(h, a), g.velocity.vsub(x.velocity, c), c.mult(1 / (1e-4 + this.densities[i2] * this.densities[v]) * this.viscosity * g.mass, c), w = this.nablaw(b), c.mult(w, c), l.vadd(c, l);
        }
        l.mult(x.mass, l), a.mult(x.mass, a), x.force.vadd(l, x.force), x.force.vadd(a, x.force);
      }
    }, n.prototype.w = function(t3) {
      var e2 = this.smoothingRadius;
      return 315 / (64 * Math.PI * Math.pow(e2, 9)) * Math.pow(e2 * e2 - t3 * t3, 3);
    }, n.prototype.gradw = function(t3, e2) {
      var o2 = t3.norm(), i2 = this.smoothingRadius;
      t3.mult(945 / (32 * Math.PI * Math.pow(i2, 9)) * Math.pow(i2 * i2 - o2 * o2, 2), e2);
    }, n.prototype.nablaw = function(t3) {
      var e2 = this.smoothingRadius;
      return 945 / (32 * Math.PI * Math.pow(e2, 9)) * (e2 * e2 - t3 * t3) * (7 * t3 * t3 - 3 * e2 * e2);
    };
  }, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Particle": 41, "../shapes/Shape": 43 }], 35: [function(t2, e, o) {
    var i = t2("../math/Vec3");
    function n(t3, e2, o2) {
      o2 = o2 || {}, this.restLength = "number" == typeof o2.restLength ? o2.restLength : 1, this.stiffness = o2.stiffness || 100, this.damping = o2.damping || 1, this.bodyA = t3, this.bodyB = e2, this.localAnchorA = new i(), this.localAnchorB = new i(), o2.localAnchorA && this.localAnchorA.copy(o2.localAnchorA), o2.localAnchorB && this.localAnchorB.copy(o2.localAnchorB), o2.worldAnchorA && this.setWorldAnchorA(o2.worldAnchorA), o2.worldAnchorB && this.setWorldAnchorB(o2.worldAnchorB);
    }
    e.exports = n, n.prototype.setWorldAnchorA = function(t3) {
      this.bodyA.pointToLocalFrame(t3, this.localAnchorA);
    }, n.prototype.setWorldAnchorB = function(t3) {
      this.bodyB.pointToLocalFrame(t3, this.localAnchorB);
    }, n.prototype.getWorldAnchorA = function(t3) {
      this.bodyA.pointToWorldFrame(this.localAnchorA, t3);
    }, n.prototype.getWorldAnchorB = function(t3) {
      this.bodyB.pointToWorldFrame(this.localAnchorB, t3);
    };
    var s = new i(), r = new i(), a = new i(), l = new i(), h = new i(), p = new i(), c = new i(), u = new i(), d = new i(), v = new i(), y = new i();
    n.prototype.applyForce = function() {
      var t3 = this.stiffness, e2 = this.damping, o2 = this.restLength, i2 = this.bodyA, n2 = this.bodyB;
      this.getWorldAnchorA(h), this.getWorldAnchorB(p), h.vsub(i2.position, c), p.vsub(n2.position, u), p.vsub(h, s);
      var f = s.norm();
      r.copy(s), r.normalize(), n2.velocity.vsub(i2.velocity, a), n2.angularVelocity.cross(u, y), a.vadd(y, a), i2.angularVelocity.cross(c, y), a.vsub(y, a), r.mult(-t3 * (f - o2) - e2 * a.dot(r), l), i2.force.vsub(l, i2.force), n2.force.vadd(l, n2.force), c.cross(l, d), u.cross(l, v), i2.torque.vsub(d, i2.torque), n2.torque.vadd(v, n2.torque);
    };
  }, { "../math/Vec3": 30 }], 36: [function(t2, e, o) {
    var i = t2("../math/Vec3"), n = t2("../math/Transform"), s = t2("../collision/RaycastResult"), r = t2("../utils/Utils");
    function a(t3) {
      t3 = r.defaults(t3, { chassisConnectionPointLocal: new i(), chassisConnectionPointWorld: new i(), directionLocal: new i(), directionWorld: new i(), axleLocal: new i(), axleWorld: new i(), suspensionRestLength: 1, suspensionMaxLength: 2, radius: 1, suspensionStiffness: 100, dampingCompression: 10, dampingRelaxation: 10, frictionSlip: 1e4, steering: 0, rotation: 0, deltaRotation: 0, rollInfluence: 0.01, maxSuspensionForce: Number.MAX_VALUE, isFrontWheel: true, clippedInvContactDotSuspension: 1, suspensionRelativeVelocity: 0, suspensionForce: 0, skidInfo: 0, suspensionLength: 0, maxSuspensionTravel: 1, useCustomSlidingRotationalSpeed: false, customSlidingRotationalSpeed: -0.1 }), this.maxSuspensionTravel = t3.maxSuspensionTravel, this.customSlidingRotationalSpeed = t3.customSlidingRotationalSpeed, this.useCustomSlidingRotationalSpeed = t3.useCustomSlidingRotationalSpeed, this.sliding = false, this.chassisConnectionPointLocal = t3.chassisConnectionPointLocal.clone(), this.chassisConnectionPointWorld = t3.chassisConnectionPointWorld.clone(), this.directionLocal = t3.directionLocal.clone(), this.directionWorld = t3.directionWorld.clone(), this.axleLocal = t3.axleLocal.clone(), this.axleWorld = t3.axleWorld.clone(), this.suspensionRestLength = t3.suspensionRestLength, this.suspensionMaxLength = t3.suspensionMaxLength, this.radius = t3.radius, this.suspensionStiffness = t3.suspensionStiffness, this.dampingCompression = t3.dampingCompression, this.dampingRelaxation = t3.dampingRelaxation, this.frictionSlip = t3.frictionSlip, this.steering = 0, this.rotation = 0, this.deltaRotation = 0, this.rollInfluence = t3.rollInfluence, this.maxSuspensionForce = t3.maxSuspensionForce, this.engineForce = 0, this.brake = 0, this.isFrontWheel = t3.isFrontWheel, this.clippedInvContactDotSuspension = 1, this.suspensionRelativeVelocity = 0, this.suspensionForce = 0, this.skidInfo = 0, this.suspensionLength = 0, this.sideImpulse = 0, this.forwardImpulse = 0, this.raycastResult = new s(), this.worldTransform = new n(), this.isInContact = false;
    }
    e.exports = a;
    var l = new i(), h = new i(), l = new i();
    a.prototype.updateWheel = function(t3) {
      var e2 = this.raycastResult;
      if (this.isInContact) {
        var o2 = e2.hitNormalWorld.dot(e2.directionWorld);
        e2.hitPointWorld.vsub(t3.position, h), t3.getVelocityAtWorldPoint(h, l);
        var i2 = e2.hitNormalWorld.dot(l);
        if (o2 >= -0.1)
          this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10;
        else {
          var n2 = -1 / o2;
          this.suspensionRelativeVelocity = i2 * n2, this.clippedInvContactDotSuspension = n2;
        }
      } else
        e2.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0, e2.directionWorld.scale(-1, e2.hitNormalWorld), this.clippedInvContactDotSuspension = 1;
    };
  }, { "../collision/RaycastResult": 10, "../math/Transform": 29, "../math/Vec3": 30, "../utils/Utils": 53 }], 37: [function(t2, e, o) {
    e.exports = r;
    var i = t2("./Shape"), n = t2("../math/Vec3"), s = t2("./ConvexPolyhedron");
    function r(t3) {
      i.call(this), this.type = i.types.BOX, this.halfExtents = t3, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius();
    }
    r.prototype = new i(), r.prototype.constructor = r, r.prototype.updateConvexPolyhedronRepresentation = function() {
      var t3 = this.halfExtents.x, e2 = this.halfExtents.y, o2 = this.halfExtents.z, i2 = [new n(-t3, -e2, -o2), new n(t3, -e2, -o2), new n(t3, e2, -o2), new n(-t3, e2, -o2), new n(-t3, -e2, o2), new n(t3, -e2, o2), new n(t3, e2, o2), new n(-t3, e2, o2)];
      new n(0, 0, 1), new n(0, 1, 0), new n(1, 0, 0);
      var r2 = new s(i2, [[3, 2, 1, 0], [4, 5, 6, 7], [5, 4, 0, 1], [2, 3, 7, 6], [0, 4, 7, 3], [1, 2, 6, 5]]);
      this.convexPolyhedronRepresentation = r2, r2.material = this.material;
    }, r.prototype.calculateLocalInertia = function(t3, e2) {
      return e2 = e2 || new n(), r.calculateInertia(this.halfExtents, t3, e2), e2;
    }, r.calculateInertia = function(t3, e2, o2) {
      o2.x = 1 / 12 * e2 * (2 * t3.y * 2 * t3.y + 2 * t3.z * 2 * t3.z), o2.y = 1 / 12 * e2 * (2 * t3.x * 2 * t3.x + 2 * t3.z * 2 * t3.z), o2.z = 1 / 12 * e2 * (2 * t3.y * 2 * t3.y + 2 * t3.x * 2 * t3.x);
    }, r.prototype.getSideNormals = function(t3, e2) {
      var o2 = this.halfExtents;
      if (t3[0].set(o2.x, 0, 0), t3[1].set(0, o2.y, 0), t3[2].set(0, 0, o2.z), t3[3].set(-o2.x, 0, 0), t3[4].set(0, -o2.y, 0), t3[5].set(0, 0, -o2.z), void 0 !== e2)
        for (var i2 = 0; i2 !== t3.length; i2++)
          e2.vmult(t3[i2], t3[i2]);
      return t3;
    }, r.prototype.volume = function() {
      return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
    }, r.prototype.updateBoundingSphereRadius = function() {
      this.boundingSphereRadius = this.halfExtents.norm();
    };
    var a = new n();
    new n(), r.prototype.forEachWorldCorner = function(t3, e2, o2) {
      for (var i2 = this.halfExtents, n2 = [[i2.x, i2.y, i2.z], [-i2.x, i2.y, i2.z], [-i2.x, -i2.y, i2.z], [-i2.x, -i2.y, -i2.z], [i2.x, -i2.y, -i2.z], [i2.x, i2.y, -i2.z], [-i2.x, i2.y, -i2.z], [i2.x, -i2.y, i2.z]], s2 = 0; s2 < n2.length; s2++)
        a.set(n2[s2][0], n2[s2][1], n2[s2][2]), e2.vmult(a, a), t3.vadd(a, a), o2(a.x, a.y, a.z);
    };
    var l = [new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n()];
    r.prototype.calculateWorldAABB = function(t3, e2, o2, i2) {
      var n2 = this.halfExtents;
      l[0].set(n2.x, n2.y, n2.z), l[1].set(-n2.x, n2.y, n2.z), l[2].set(-n2.x, -n2.y, n2.z), l[3].set(-n2.x, -n2.y, -n2.z), l[4].set(n2.x, -n2.y, -n2.z), l[5].set(n2.x, n2.y, -n2.z), l[6].set(-n2.x, n2.y, -n2.z), l[7].set(n2.x, -n2.y, n2.z);
      var s2 = l[0];
      e2.vmult(s2, s2), t3.vadd(s2, s2), i2.copy(s2), o2.copy(s2);
      for (var r2 = 1; r2 < 8; r2++) {
        var s2 = l[r2];
        e2.vmult(s2, s2), t3.vadd(s2, s2);
        var a2 = s2.x, h = s2.y, p = s2.z;
        a2 > i2.x && (i2.x = a2), h > i2.y && (i2.y = h), p > i2.z && (i2.z = p), a2 < o2.x && (o2.x = a2), h < o2.y && (o2.y = h), p < o2.z && (o2.z = p);
      }
    };
  }, { "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 38: [function(t2, e, o) {
    e.exports = r;
    var i = t2("./Shape"), n = t2("../math/Vec3");
    t2("../math/Quaternion");
    var s = t2("../math/Transform");
    function r(t3, e2, o2) {
      i.call(this), this.type = i.types.CONVEXPOLYHEDRON, this.vertices = t3 || [], this.worldVertices = [], this.worldVerticesNeedsUpdate = true, this.faces = e2 || [], this.faceNormals = [], this.computeNormals(), this.worldFaceNormalsNeedsUpdate = true, this.worldFaceNormals = [], this.uniqueEdges = [], this.uniqueAxes = o2 ? o2.slice() : null, this.computeEdges(), this.updateBoundingSphereRadius();
    }
    r.prototype = new i(), r.prototype.constructor = r;
    var a = new n();
    r.prototype.computeEdges = function() {
      var t3 = this.faces, e2 = this.vertices;
      e2.length;
      var o2 = this.uniqueEdges;
      o2.length = 0;
      for (var i2 = 0; i2 !== t3.length; i2++)
        for (var n2 = t3[i2], s2 = n2.length, r2 = 0; r2 !== s2; r2++) {
          var l2 = (r2 + 1) % s2;
          e2[n2[r2]].vsub(e2[n2[l2]], a), a.normalize();
          for (var h2 = false, p2 = 0; p2 !== o2.length; p2++)
            if (o2[p2].almostEquals(a) || o2[p2].almostEquals(a)) {
              h2 = true;
              break;
            }
          h2 || o2.push(a.clone());
        }
    }, r.prototype.computeNormals = function() {
      this.faceNormals.length = this.faces.length;
      for (var t3 = 0; t3 < this.faces.length; t3++) {
        for (var e2 = 0; e2 < this.faces[t3].length; e2++)
          if (!this.vertices[this.faces[t3][e2]])
            throw Error("Vertex " + this.faces[t3][e2] + " not found!");
        var o2 = this.faceNormals[t3] || new n();
        this.getFaceNormal(t3, o2), o2.negate(o2), this.faceNormals[t3] = o2;
        var i2 = this.vertices[this.faces[t3][0]];
        if (0 > o2.dot(i2)) {
          console.error(".faceNormals[" + t3 + "] = Vec3(" + o2.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
          for (var e2 = 0; e2 < this.faces[t3].length; e2++)
            console.warn(".vertices[" + this.faces[t3][e2] + "] = Vec3(" + this.vertices[this.faces[t3][e2]].toString() + ")");
        }
      }
    };
    var l = new n(), h = new n();
    r.computeNormal = function(t3, e2, o2, i2) {
      e2.vsub(t3, h), o2.vsub(e2, l), l.cross(h, i2), i2.isZero() || i2.normalize();
    }, r.prototype.getFaceNormal = function(t3, e2) {
      var o2 = this.faces[t3], i2 = this.vertices[o2[0]], n2 = this.vertices[o2[1]], s2 = this.vertices[o2[2]];
      return r.computeNormal(i2, n2, s2, e2);
    };
    var p = new n();
    r.prototype.clipAgainstHull = function(t3, e2, o2, i2, s2, r2, a2, l2, h2) {
      for (var c2 = -1, u2 = -Number.MAX_VALUE, d2 = 0; d2 < o2.faces.length; d2++) {
        p.copy(o2.faceNormals[d2]), s2.vmult(p, p);
        var v2 = p.dot(r2);
        v2 > u2 && (u2 = v2, c2 = d2);
      }
      for (var y2 = [], f2 = o2.faces[c2], m2 = f2.length, w2 = 0; w2 < m2; w2++) {
        var x2 = o2.vertices[f2[w2]], g2 = new n();
        g2.copy(x2), s2.vmult(g2, g2), i2.vadd(g2, g2), y2.push(g2);
      }
      c2 >= 0 && this.clipFaceAgainstHull(r2, t3, e2, y2, a2, l2, h2);
    };
    var c = new n(), u = new n(), d = new n(), v = new n(), y = new n(), f = new n();
    r.prototype.findSeparatingAxis = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      var l2 = Number.MAX_VALUE, h2 = 0;
      if (this.uniqueAxes)
        for (var p2 = 0; p2 !== this.uniqueAxes.length; p2++) {
          o2.vmult(this.uniqueAxes[p2], c);
          var m2 = this.testSepAxis(c, t3, e2, o2, i2, n2);
          if (false === m2)
            return false;
          m2 < l2 && (l2 = m2, s2.copy(c));
        }
      else
        for (var w2 = r2 ? r2.length : this.faces.length, p2 = 0; p2 < w2; p2++) {
          var x2 = r2 ? r2[p2] : p2;
          c.copy(this.faceNormals[x2]), o2.vmult(c, c);
          var m2 = this.testSepAxis(c, t3, e2, o2, i2, n2);
          if (false === m2)
            return false;
          m2 < l2 && (l2 = m2, s2.copy(c));
        }
      if (t3.uniqueAxes)
        for (var p2 = 0; p2 !== t3.uniqueAxes.length; p2++) {
          n2.vmult(t3.uniqueAxes[p2], u), h2++;
          var m2 = this.testSepAxis(u, t3, e2, o2, i2, n2);
          if (false === m2)
            return false;
          m2 < l2 && (l2 = m2, s2.copy(u));
        }
      else
        for (var g2 = a2 ? a2.length : t3.faces.length, p2 = 0; p2 < g2; p2++) {
          var x2 = a2 ? a2[p2] : p2;
          u.copy(t3.faceNormals[x2]), n2.vmult(u, u), h2++;
          var m2 = this.testSepAxis(u, t3, e2, o2, i2, n2);
          if (false === m2)
            return false;
          m2 < l2 && (l2 = m2, s2.copy(u));
        }
      for (var b2 = 0; b2 !== this.uniqueEdges.length; b2++) {
        o2.vmult(this.uniqueEdges[b2], v);
        for (var B2 = 0; B2 !== t3.uniqueEdges.length; B2++)
          if (n2.vmult(t3.uniqueEdges[B2], y), v.cross(y, f), !f.almostZero()) {
            f.normalize();
            var E2 = this.testSepAxis(f, t3, e2, o2, i2, n2);
            if (false === E2)
              return false;
            E2 < l2 && (l2 = E2, s2.copy(f));
          }
      }
      return i2.vsub(e2, d), d.dot(s2) > 0 && s2.negate(s2), true;
    };
    var m = [], w = [];
    r.prototype.testSepAxis = function(t3, e2, o2, i2, n2, s2) {
      r.project(this, t3, o2, i2, m), r.project(e2, t3, n2, s2, w);
      var a2 = m[0], l2 = m[1], h2 = w[0], p2 = w[1];
      if (a2 < p2 || h2 < l2)
        return false;
      var c2 = a2 - p2, u2 = h2 - l2;
      return c2 < u2 ? c2 : u2;
    };
    var x = new n(), g = new n();
    r.prototype.calculateLocalInertia = function(t3, e2) {
      this.computeLocalAABB(x, g);
      var o2 = g.x - x.x, i2 = g.y - x.y, n2 = g.z - x.z;
      e2.x = 1 / 12 * t3 * (2 * i2 * 2 * i2 + 2 * n2 * 2 * n2), e2.y = 1 / 12 * t3 * (2 * o2 * 2 * o2 + 2 * n2 * 2 * n2), e2.z = 1 / 12 * t3 * (2 * i2 * 2 * i2 + 2 * o2 * 2 * o2);
    }, r.prototype.getPlaneConstantOfFace = function(t3) {
      var e2 = this.faces[t3], o2 = this.faceNormals[t3], i2 = this.vertices[e2[0]];
      return -o2.dot(i2);
    };
    var b = new n(), B = new n(), E = new n(), A = new n(), S = new n(), C = new n(), z = new n(), q = new n();
    r.prototype.clipFaceAgainstHull = function(t3, e2, o2, i2, n2, s2, r2) {
      for (var a2 = [], l2 = -1, h2 = Number.MAX_VALUE, p2 = 0; p2 < this.faces.length; p2++) {
        b.copy(this.faceNormals[p2]), o2.vmult(b, b);
        var c2 = b.dot(t3);
        c2 < h2 && (h2 = c2, l2 = p2);
      }
      if (!(l2 < 0)) {
        var u2 = this.faces[l2];
        u2.connectedFaces = [];
        for (var d2 = 0; d2 < this.faces.length; d2++)
          for (var v2 = 0; v2 < this.faces[d2].length; v2++)
            -1 !== u2.indexOf(this.faces[d2][v2]) && d2 !== l2 && -1 === u2.connectedFaces.indexOf(d2) && u2.connectedFaces.push(d2);
        i2.length;
        for (var y2 = u2.length, f2 = 0; f2 < y2; f2++) {
          var m2, w2 = this.vertices[u2[f2]], x2 = this.vertices[u2[(f2 + 1) % y2]];
          w2.vsub(x2, B), E.copy(B), o2.vmult(E, E), e2.vadd(E, E), A.copy(this.faceNormals[l2]), o2.vmult(A, A), e2.vadd(A, A), E.cross(A, S), S.negate(S), C.copy(w2), o2.vmult(C, C), e2.vadd(C, C), C.dot(S);
          var g2 = u2.connectedFaces[f2];
          z.copy(this.faceNormals[g2]);
          var R2 = this.getPlaneConstantOfFace(g2);
          q.copy(z), o2.vmult(q, q);
          var m2 = R2 - q.dot(e2);
          for (this.clipFaceAgainstPlane(i2, a2, q, m2); i2.length; )
            i2.shift();
          for (; a2.length; )
            i2.push(a2.shift());
        }
        z.copy(this.faceNormals[l2]);
        var R2 = this.getPlaneConstantOfFace(l2);
        q.copy(z), o2.vmult(q, q);
        for (var m2 = R2 - q.dot(e2), d2 = 0; d2 < i2.length; d2++) {
          var M2 = q.dot(i2[d2]) + m2;
          if (M2 <= n2 && (console.log("clamped: depth=" + M2 + " to minDist=" + n2), M2 = n2), M2 <= s2) {
            var P2 = i2[d2];
            if (M2 <= 0) {
              var F2 = { point: P2, normal: q, depth: M2 };
              r2.push(F2);
            }
          }
        }
      }
    }, r.prototype.clipFaceAgainstPlane = function(t3, e2, o2, i2) {
      var s2, r2, a2 = t3.length;
      if (a2 < 2)
        return e2;
      var l2 = t3[t3.length - 1], h2 = t3[0];
      s2 = o2.dot(l2) + i2;
      for (var p2 = 0; p2 < a2; p2++) {
        if (h2 = t3[p2], r2 = o2.dot(h2) + i2, s2 < 0) {
          if (r2 < 0) {
            var c2 = new n();
            c2.copy(h2), e2.push(c2);
          } else {
            var c2 = new n();
            l2.lerp(h2, s2 / (s2 - r2), c2), e2.push(c2);
          }
        } else if (r2 < 0) {
          var c2 = new n();
          l2.lerp(h2, s2 / (s2 - r2), c2), e2.push(c2), e2.push(h2);
        }
        l2 = h2, s2 = r2;
      }
      return e2;
    }, r.prototype.computeWorldVertices = function(t3, e2) {
      for (var o2 = this.vertices.length; this.worldVertices.length < o2; )
        this.worldVertices.push(new n());
      for (var i2 = this.vertices, s2 = this.worldVertices, r2 = 0; r2 !== o2; r2++)
        e2.vmult(i2[r2], s2[r2]), t3.vadd(s2[r2], s2[r2]);
      this.worldVerticesNeedsUpdate = false;
    }, new n(), r.prototype.computeLocalAABB = function(t3, e2) {
      var o2 = this.vertices.length, i2 = this.vertices;
      t3.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), e2.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      for (var n2 = 0; n2 < o2; n2++) {
        var s2 = i2[n2];
        s2.x < t3.x ? t3.x = s2.x : s2.x > e2.x && (e2.x = s2.x), s2.y < t3.y ? t3.y = s2.y : s2.y > e2.y && (e2.y = s2.y), s2.z < t3.z ? t3.z = s2.z : s2.z > e2.z && (e2.z = s2.z);
      }
    }, r.prototype.computeWorldFaceNormals = function(t3) {
      for (var e2 = this.faceNormals.length; this.worldFaceNormals.length < e2; )
        this.worldFaceNormals.push(new n());
      for (var o2 = this.faceNormals, i2 = this.worldFaceNormals, s2 = 0; s2 !== e2; s2++)
        t3.vmult(o2[s2], i2[s2]);
      this.worldFaceNormalsNeedsUpdate = false;
    }, r.prototype.updateBoundingSphereRadius = function() {
      for (var t3 = 0, e2 = this.vertices, o2 = 0, i2 = e2.length; o2 !== i2; o2++) {
        var n2 = e2[o2].norm2();
        n2 > t3 && (t3 = n2);
      }
      this.boundingSphereRadius = Math.sqrt(t3);
    };
    var R = new n();
    r.prototype.calculateWorldAABB = function(t3, e2, o2, i2) {
      for (var n2, s2, r2, a2, l2, h2, p2 = this.vertices.length, c2 = this.vertices, u2 = 0; u2 < p2; u2++)
        R.copy(c2[u2]), e2.vmult(R, R), t3.vadd(R, R), R.x < n2 || void 0 === n2 ? n2 = R.x : (R.x > a2 || void 0 === a2) && (a2 = R.x), R.y < s2 || void 0 === s2 ? s2 = R.y : (R.y > l2 || void 0 === l2) && (l2 = R.y), R.z < r2 || void 0 === r2 ? r2 = R.z : (R.z > h2 || void 0 === h2) && (h2 = R.z);
      o2.set(n2, s2, r2), i2.set(a2, l2, h2);
    }, r.prototype.volume = function() {
      return 4 * Math.PI * this.boundingSphereRadius / 3;
    }, r.prototype.getAveragePointLocal = function(t3) {
      t3 = t3 || new n();
      for (var e2 = this.vertices.length, o2 = this.vertices, i2 = 0; i2 < e2; i2++)
        t3.vadd(o2[i2], t3);
      return t3.mult(1 / e2, t3), t3;
    }, r.prototype.transformAllPoints = function(t3, e2) {
      var o2 = this.vertices.length, i2 = this.vertices;
      if (e2) {
        for (var n2 = 0; n2 < o2; n2++) {
          var s2 = i2[n2];
          e2.vmult(s2, s2);
        }
        for (var n2 = 0; n2 < this.faceNormals.length; n2++) {
          var s2 = this.faceNormals[n2];
          e2.vmult(s2, s2);
        }
      }
      if (t3)
        for (var n2 = 0; n2 < o2; n2++) {
          var s2 = i2[n2];
          s2.vadd(t3, s2);
        }
    };
    var M = new n(), P = new n(), F = new n();
    r.prototype.pointIsInside = function(t3) {
      var e2 = this.vertices.length, o2 = this.vertices, i2 = this.faces, n2 = this.faceNormals, s2 = this.faces.length;
      this.getAveragePointLocal(M);
      for (var r2 = 0; r2 < s2; r2++) {
        this.faces[r2].length;
        var e2 = n2[r2], a2 = o2[i2[r2][0]];
        t3.vsub(a2, P);
        var l2 = e2.dot(P);
        M.vsub(a2, F);
        var h2 = e2.dot(F);
        if (l2 < 0 && h2 > 0 || l2 > 0 && h2 < 0)
          return false;
      }
      return -1;
    }, new n();
    var V = new n(), T = new n();
    r.project = function(t3, e2, o2, i2, n2) {
      var r2 = t3.vertices.length, a2 = 0, l2 = 0, h2 = t3.vertices;
      T.setZero(), s.vectorToLocalFrame(o2, i2, e2, V), s.pointToLocalFrame(o2, i2, T, T);
      var p2 = T.dot(V);
      l2 = a2 = h2[0].dot(V);
      for (var c2 = 1; c2 < r2; c2++) {
        var u2 = h2[c2].dot(V);
        u2 > a2 && (a2 = u2), u2 < l2 && (l2 = u2);
      }
      if ((l2 -= p2) > (a2 -= p2)) {
        var d2 = l2;
        l2 = a2, a2 = d2;
      }
      n2[0] = a2, n2[1] = l2;
    };
  }, { "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "./Shape": 43 }], 39: [function(t2, e, o) {
    e.exports = r;
    var i = t2("./Shape"), n = t2("../math/Vec3");
    t2("../math/Quaternion");
    var s = t2("./ConvexPolyhedron");
    function r(t3, e2, o2, r2) {
      var a = [], l = [], h = [], p = [], c = [], u = Math.cos, d = Math.sin;
      a.push(new n(e2 * u(0), e2 * d(0), -(0.5 * o2))), p.push(0), a.push(new n(t3 * u(0), t3 * d(0), 0.5 * o2)), c.push(1);
      for (var v = 0; v < r2; v++) {
        var y = 2 * Math.PI / r2 * (v + 1), f = 2 * Math.PI / r2 * (v + 0.5);
        v < r2 - 1 ? (a.push(new n(e2 * u(y), e2 * d(y), -(0.5 * o2))), p.push(2 * v + 2), a.push(new n(t3 * u(y), t3 * d(y), 0.5 * o2)), c.push(2 * v + 3), h.push([2 * v + 2, 2 * v + 3, 2 * v + 1, 2 * v])) : h.push([0, 1, 2 * v + 1, 2 * v]), (r2 % 2 == 1 || v < r2 / 2) && l.push(new n(u(f), d(f), 0));
      }
      h.push(c), l.push(new n(0, 0, 1));
      for (var m = [], v = 0; v < p.length; v++)
        m.push(p[p.length - v - 1]);
      h.push(m), this.type = i.types.CONVEXPOLYHEDRON, s.call(this, a, h, l);
    }
    r.prototype = new s();
  }, { "../math/Quaternion": 28, "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 40: [function(t2, e, o) {
    var i = t2("./Shape"), n = t2("./ConvexPolyhedron"), s = t2("../math/Vec3"), r = t2("../utils/Utils");
    function a(t3, e2) {
      e2 = r.defaults(e2, { maxValue: null, minValue: null, elementSize: 1 }), this.data = t3, this.maxValue = e2.maxValue, this.minValue = e2.minValue, this.elementSize = e2.elementSize, null === e2.minValue && this.updateMinValue(), null === e2.maxValue && this.updateMaxValue(), this.cacheEnabled = true, i.call(this), this.pillarConvex = new n(), this.pillarOffset = new s(), this.type = i.types.HEIGHTFIELD, this.updateBoundingSphereRadius(), this._cachedPillars = {};
    }
    e.exports = a, a.prototype = new i(), a.prototype.update = function() {
      this._cachedPillars = {};
    }, a.prototype.updateMinValue = function() {
      for (var t3 = this.data, e2 = t3[0][0], o2 = 0; o2 !== t3.length; o2++)
        for (var i2 = 0; i2 !== t3[o2].length; i2++) {
          var n2 = t3[o2][i2];
          n2 < e2 && (e2 = n2);
        }
      this.minValue = e2;
    }, a.prototype.updateMaxValue = function() {
      for (var t3 = this.data, e2 = t3[0][0], o2 = 0; o2 !== t3.length; o2++)
        for (var i2 = 0; i2 !== t3[o2].length; i2++) {
          var n2 = t3[o2][i2];
          n2 > e2 && (e2 = n2);
        }
      this.maxValue = e2;
    }, a.prototype.setHeightValueAtIndex = function(t3, e2, o2) {
      this.data[t3][e2] = o2, this.clearCachedConvexTrianglePillar(t3, e2, false), t3 > 0 && (this.clearCachedConvexTrianglePillar(t3 - 1, e2, true), this.clearCachedConvexTrianglePillar(t3 - 1, e2, false)), e2 > 0 && (this.clearCachedConvexTrianglePillar(t3, e2 - 1, true), this.clearCachedConvexTrianglePillar(t3, e2 - 1, false)), e2 > 0 && t3 > 0 && this.clearCachedConvexTrianglePillar(t3 - 1, e2 - 1, true);
    }, a.prototype.getRectMinMax = function(t3, e2, o2, i2, n2) {
      n2 = n2 || [];
      for (var s2 = this.data, r2 = this.minValue, a2 = t3; a2 <= o2; a2++)
        for (var l = e2; l <= i2; l++) {
          var h = s2[a2][l];
          h > r2 && (r2 = h);
        }
      n2[0] = this.minValue, n2[1] = r2;
    }, a.prototype.getIndexOfPosition = function(t3, e2, o2, i2) {
      var n2 = this.elementSize, s2 = this.data, r2 = Math.floor(t3 / n2), a2 = Math.floor(e2 / n2);
      return o2[0] = r2, o2[1] = a2, i2 && (r2 < 0 && (r2 = 0), a2 < 0 && (a2 = 0), r2 >= s2.length - 1 && (r2 = s2.length - 1), a2 >= s2[0].length - 1 && (a2 = s2[0].length - 1)), !(r2 < 0) && !(a2 < 0) && !(r2 >= s2.length - 1) && !(a2 >= s2[0].length - 1);
    }, a.prototype.getHeightAt = function(t3, e2, o2) {
      var i2 = [];
      this.getIndexOfPosition(t3, e2, i2, o2);
      var n2 = [];
      return this.getRectMinMax(i2[0], i2[1] + 1, i2[0], i2[1] + 1, n2), (n2[0] + n2[1]) / 2;
    }, a.prototype.getCacheConvexTrianglePillarKey = function(t3, e2, o2) {
      return t3 + "_" + e2 + "_" + (o2 ? 1 : 0);
    }, a.prototype.getCachedConvexTrianglePillar = function(t3, e2, o2) {
      return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t3, e2, o2)];
    }, a.prototype.setCachedConvexTrianglePillar = function(t3, e2, o2, i2, n2) {
      this._cachedPillars[this.getCacheConvexTrianglePillarKey(t3, e2, o2)] = { convex: i2, offset: n2 };
    }, a.prototype.clearCachedConvexTrianglePillar = function(t3, e2, o2) {
      delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t3, e2, o2)];
    }, a.prototype.getConvexTrianglePillar = function(t3, e2, o2) {
      var i2 = this.pillarConvex, r2 = this.pillarOffset;
      if (this.cacheEnabled) {
        var a2 = this.getCachedConvexTrianglePillar(t3, e2, o2);
        if (a2) {
          this.pillarConvex = a2.convex, this.pillarOffset = a2.offset;
          return;
        }
        i2 = new n(), r2 = new s(), this.pillarConvex = i2, this.pillarOffset = r2;
      }
      var a2 = this.data, l = this.elementSize, h = i2.faces;
      i2.vertices.length = 6;
      for (var p = 0; p < 6; p++)
        i2.vertices[p] || (i2.vertices[p] = new s());
      h.length = 5;
      for (var p = 0; p < 5; p++)
        h[p] || (h[p] = []);
      var c = i2.vertices, u = (Math.min(a2[t3][e2], a2[t3 + 1][e2], a2[t3][e2 + 1], a2[t3 + 1][e2 + 1]) - this.minValue) / 2 + this.minValue;
      o2 ? (r2.set((t3 + 0.75) * l, (e2 + 0.75) * l, u), c[0].set(0.25 * l, 0.25 * l, a2[t3 + 1][e2 + 1] - u), c[1].set(-0.75 * l, 0.25 * l, a2[t3][e2 + 1] - u), c[2].set(0.25 * l, -0.75 * l, a2[t3 + 1][e2] - u), c[3].set(0.25 * l, 0.25 * l, -u - 1), c[4].set(-0.75 * l, 0.25 * l, -u - 1), c[5].set(0.25 * l, -0.75 * l, -u - 1), h[0][0] = 0, h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 2, h[2][1] = 5, h[2][2] = 3, h[2][3] = 0, h[3][0] = 3, h[3][1] = 4, h[3][2] = 1, h[3][3] = 0, h[4][0] = 1, h[4][1] = 4, h[4][2] = 5, h[4][3] = 2) : (r2.set((t3 + 0.25) * l, (e2 + 0.25) * l, u), c[0].set(-0.25 * l, -0.25 * l, a2[t3][e2] - u), c[1].set(0.75 * l, -0.25 * l, a2[t3 + 1][e2] - u), c[2].set(-0.25 * l, 0.75 * l, a2[t3][e2 + 1] - u), c[3].set(-0.25 * l, -0.25 * l, -u - 1), c[4].set(0.75 * l, -0.25 * l, -u - 1), c[5].set(-0.25 * l, 0.75 * l, -u - 1), h[0][0] = 0, h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 0, h[2][1] = 2, h[2][2] = 5, h[2][3] = 3, h[3][0] = 1, h[3][1] = 0, h[3][2] = 3, h[3][3] = 4, h[4][0] = 4, h[4][1] = 5, h[4][2] = 2, h[4][3] = 1), i2.computeNormals(), i2.computeEdges(), i2.updateBoundingSphereRadius(), this.setCachedConvexTrianglePillar(t3, e2, o2, i2, r2);
    }, a.prototype.calculateLocalInertia = function(t3, e2) {
      return (e2 = e2 || new s()).set(0, 0, 0), e2;
    }, a.prototype.volume = function() {
      return Number.MAX_VALUE;
    }, a.prototype.calculateWorldAABB = function(t3, e2, o2, i2) {
      o2.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), i2.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    }, a.prototype.updateBoundingSphereRadius = function() {
      var t3 = this.data, e2 = this.elementSize;
      this.boundingSphereRadius = new s(t3.length * e2, t3[0].length * e2, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
    };
  }, { "../math/Vec3": 30, "../utils/Utils": 53, "./ConvexPolyhedron": 38, "./Shape": 43 }], 41: [function(t2, e, o) {
    e.exports = s;
    var i = t2("./Shape"), n = t2("../math/Vec3");
    function s() {
      i.call(this), this.type = i.types.PARTICLE;
    }
    s.prototype = new i(), s.prototype.constructor = s, s.prototype.calculateLocalInertia = function(t3, e2) {
      return (e2 = e2 || new n()).set(0, 0, 0), e2;
    }, s.prototype.volume = function() {
      return 0;
    }, s.prototype.updateBoundingSphereRadius = function() {
      this.boundingSphereRadius = 0;
    }, s.prototype.calculateWorldAABB = function(t3, e2, o2, i2) {
      o2.copy(t3), i2.copy(t3);
    };
  }, { "../math/Vec3": 30, "./Shape": 43 }], 42: [function(t2, e, o) {
    e.exports = s;
    var i = t2("./Shape"), n = t2("../math/Vec3");
    function s() {
      i.call(this), this.type = i.types.PLANE, this.worldNormal = new n(), this.worldNormalNeedsUpdate = true, this.boundingSphereRadius = Number.MAX_VALUE;
    }
    s.prototype = new i(), s.prototype.constructor = s, s.prototype.computeWorldNormal = function(t3) {
      var e2 = this.worldNormal;
      e2.set(0, 0, 1), t3.vmult(e2, e2), this.worldNormalNeedsUpdate = false;
    }, s.prototype.calculateLocalInertia = function(t3, e2) {
      return e2 = e2 || new n();
    }, s.prototype.volume = function() {
      return Number.MAX_VALUE;
    };
    var r = new n();
    s.prototype.calculateWorldAABB = function(t3, e2, o2, i2) {
      r.set(0, 0, 1), e2.vmult(r, r);
      var n2 = Number.MAX_VALUE;
      o2.set(-n2, -n2, -n2), i2.set(n2, n2, n2), 1 === r.x && (i2.x = t3.x), 1 === r.y && (i2.y = t3.y), 1 === r.z && (i2.z = t3.z), -1 === r.x && (o2.x = t3.x), -1 === r.y && (o2.y = t3.y), -1 === r.z && (o2.z = t3.z);
    }, s.prototype.updateBoundingSphereRadius = function() {
      this.boundingSphereRadius = Number.MAX_VALUE;
    };
  }, { "../math/Vec3": 30, "./Shape": 43 }], 43: [function(t2, e, o) {
    e.exports = i;
    var i = t2("./Shape");
    function i() {
      this.id = i.idCounter++, this.type = 0, this.boundingSphereRadius = 0, this.collisionResponse = true, this.material = null;
    }
    t2("../math/Vec3"), t2("../math/Quaternion"), t2("../material/Material"), i.prototype.constructor = i, i.prototype.updateBoundingSphereRadius = function() {
      throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
    }, i.prototype.volume = function() {
      throw "volume() not implemented for shape type " + this.type;
    }, i.prototype.calculateLocalInertia = function(t3, e2) {
      throw "calculateLocalInertia() not implemented for shape type " + this.type;
    }, i.idCounter = 0, i.types = { SPHERE: 1, PLANE: 2, BOX: 4, COMPOUND: 8, CONVEXPOLYHEDRON: 16, HEIGHTFIELD: 32, PARTICLE: 64, CYLINDER: 128, TRIMESH: 256 };
  }, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "./Shape": 43 }], 44: [function(t2, e, o) {
    e.exports = s;
    var i = t2("./Shape"), n = t2("../math/Vec3");
    function s(t3) {
      if (i.call(this), this.radius = void 0 !== t3 ? Number(t3) : 1, this.type = i.types.SPHERE, this.radius < 0)
        throw Error("The sphere radius cannot be negative.");
      this.updateBoundingSphereRadius();
    }
    s.prototype = new i(), s.prototype.constructor = s, s.prototype.calculateLocalInertia = function(t3, e2) {
      e2 = e2 || new n();
      var o2 = 2 * t3 * this.radius * this.radius / 5;
      return e2.x = o2, e2.y = o2, e2.z = o2, e2;
    }, s.prototype.volume = function() {
      return 4 * Math.PI * this.radius / 3;
    }, s.prototype.updateBoundingSphereRadius = function() {
      this.boundingSphereRadius = this.radius;
    }, s.prototype.calculateWorldAABB = function(t3, e2, o2, i2) {
      for (var n2 = this.radius, s2 = ["x", "y", "z"], r = 0; r < s2.length; r++) {
        var a = s2[r];
        o2[a] = t3[a] - n2, i2[a] = t3[a] + n2;
      }
    };
  }, { "../math/Vec3": 30, "./Shape": 43 }], 45: [function(t2, e, o) {
    e.exports = l;
    var i = t2("./Shape"), n = t2("../math/Vec3");
    t2("../math/Quaternion");
    var s = t2("../math/Transform"), r = t2("../collision/AABB"), a = t2("../utils/Octree");
    function l(t3, e2) {
      i.call(this), this.type = i.types.TRIMESH, this.vertices = new Float32Array(t3), this.indices = new Int16Array(e2), this.normals = new Float32Array(e2.length), this.aabb = new r(), this.edges = null, this.scale = new n(1, 1, 1), this.tree = new a(), this.updateEdges(), this.updateNormals(), this.updateAABB(), this.updateBoundingSphereRadius(), this.updateTree();
    }
    l.prototype = new i(), l.prototype.constructor = l;
    var h = new n();
    l.prototype.updateTree = function() {
      var t3 = this.tree;
      t3.reset(), t3.aabb.copy(this.aabb);
      var e2 = this.scale;
      t3.aabb.lowerBound.x *= 1 / e2.x, t3.aabb.lowerBound.y *= 1 / e2.y, t3.aabb.lowerBound.z *= 1 / e2.z, t3.aabb.upperBound.x *= 1 / e2.x, t3.aabb.upperBound.y *= 1 / e2.y, t3.aabb.upperBound.z *= 1 / e2.z;
      for (var o2 = new r(), i2 = new n(), s2 = new n(), a2 = new n(), l2 = [i2, s2, a2], h2 = 0; h2 < this.indices.length / 3; h2++) {
        var p2 = 3 * h2;
        this._getUnscaledVertex(this.indices[p2], i2), this._getUnscaledVertex(this.indices[p2 + 1], s2), this._getUnscaledVertex(this.indices[p2 + 2], a2), o2.setFromPoints(l2), t3.insert(o2, h2);
      }
      t3.removeEmptyNodes();
    };
    var p = new r();
    l.prototype.getTrianglesInAABB = function(t3, e2) {
      p.copy(t3);
      var o2 = this.scale, i2 = o2.x, n2 = o2.y, s2 = o2.z, r2 = p.lowerBound, a2 = p.upperBound;
      return r2.x /= i2, r2.y /= n2, r2.z /= s2, a2.x /= i2, a2.y /= n2, a2.z /= s2, this.tree.aabbQuery(p, e2);
    }, l.prototype.setScale = function(t3) {
      var e2 = this.scale.x === this.scale.y === this.scale.z, o2 = t3.x === t3.y === t3.z;
      e2 && o2 || this.updateNormals(), this.scale.copy(t3), this.updateAABB(), this.updateBoundingSphereRadius();
    }, l.prototype.updateNormals = function() {
      for (var t3 = this.normals, e2 = 0; e2 < this.indices.length / 3; e2++) {
        var o2 = 3 * e2, i2 = this.indices[o2], n2 = this.indices[o2 + 1], s2 = this.indices[o2 + 2];
        this.getVertex(i2, y), this.getVertex(n2, f), this.getVertex(s2, m), l.computeNormal(f, y, m, h), t3[o2] = h.x, t3[o2 + 1] = h.y, t3[o2 + 2] = h.z;
      }
    }, l.prototype.updateEdges = function() {
      for (var t3 = {}, e2 = function(e3, o3) {
        t3[n2 < s2 ? n2 + "_" + s2 : s2 + "_" + n2] = true;
      }, o2 = 0; o2 < this.indices.length / 3; o2++) {
        var i2 = 3 * o2, n2 = this.indices[i2], s2 = this.indices[i2 + 1], r2 = this.indices[i2 + 2];
        e2(n2, s2), e2(s2, r2), e2(r2, n2);
      }
      var a2 = Object.keys(t3);
      this.edges = new Int16Array(2 * a2.length);
      for (var o2 = 0; o2 < a2.length; o2++) {
        var l2 = a2[o2].split("_");
        this.edges[2 * o2] = parseInt(l2[0], 10), this.edges[2 * o2 + 1] = parseInt(l2[1], 10);
      }
    }, l.prototype.getEdgeVertex = function(t3, e2, o2) {
      var i2 = this.edges[2 * t3 + (e2 ? 1 : 0)];
      this.getVertex(i2, o2);
    };
    var c = new n(), u = new n();
    l.prototype.getEdgeVector = function(t3, e2) {
      this.getEdgeVertex(t3, 0, c), this.getEdgeVertex(t3, 1, u), u.vsub(c, e2);
    };
    var d = new n(), v = new n();
    l.computeNormal = function(t3, e2, o2, i2) {
      e2.vsub(t3, v), o2.vsub(e2, d), d.cross(v, i2), i2.isZero() || i2.normalize();
    };
    var y = new n(), f = new n(), m = new n();
    l.prototype.getVertex = function(t3, e2) {
      var o2 = this.scale;
      return this._getUnscaledVertex(t3, e2), e2.x *= o2.x, e2.y *= o2.y, e2.z *= o2.z, e2;
    }, l.prototype._getUnscaledVertex = function(t3, e2) {
      var o2 = 3 * t3, i2 = this.vertices;
      return e2.set(i2[o2], i2[o2 + 1], i2[o2 + 2]);
    }, l.prototype.getWorldVertex = function(t3, e2, o2, i2) {
      return this.getVertex(t3, i2), s.pointToWorldFrame(e2, o2, i2, i2), i2;
    }, l.prototype.getTriangleVertices = function(t3, e2, o2, i2) {
      var n2 = 3 * t3;
      this.getVertex(this.indices[n2], e2), this.getVertex(this.indices[n2 + 1], o2), this.getVertex(this.indices[n2 + 2], i2);
    }, l.prototype.getNormal = function(t3, e2) {
      var o2 = 3 * t3;
      return e2.set(this.normals[o2], this.normals[o2 + 1], this.normals[o2 + 2]);
    };
    var w = new r();
    l.prototype.calculateLocalInertia = function(t3, e2) {
      this.computeLocalAABB(w);
      var o2 = w.upperBound.x - w.lowerBound.x, i2 = w.upperBound.y - w.lowerBound.y, n2 = w.upperBound.z - w.lowerBound.z;
      return e2.set(1 / 12 * t3 * (2 * i2 * 2 * i2 + 2 * n2 * 2 * n2), 1 / 12 * t3 * (2 * o2 * 2 * o2 + 2 * n2 * 2 * n2), 1 / 12 * t3 * (2 * i2 * 2 * i2 + 2 * o2 * 2 * o2));
    };
    var x = new n();
    l.prototype.computeLocalAABB = function(t3) {
      var e2 = t3.lowerBound, o2 = t3.upperBound, i2 = this.vertices.length;
      this.vertices, this.getVertex(0, x), e2.copy(x), o2.copy(x);
      for (var n2 = 0; n2 !== i2; n2++)
        this.getVertex(n2, x), x.x < e2.x ? e2.x = x.x : x.x > o2.x && (o2.x = x.x), x.y < e2.y ? e2.y = x.y : x.y > o2.y && (o2.y = x.y), x.z < e2.z ? e2.z = x.z : x.z > o2.z && (o2.z = x.z);
    }, l.prototype.updateAABB = function() {
      this.computeLocalAABB(this.aabb);
    }, l.prototype.updateBoundingSphereRadius = function() {
      for (var t3 = 0, e2 = this.vertices, o2 = new n(), i2 = 0, s2 = e2.length / 3; i2 !== s2; i2++) {
        this.getVertex(i2, o2);
        var r2 = o2.norm2();
        r2 > t3 && (t3 = r2);
      }
      this.boundingSphereRadius = Math.sqrt(t3);
    }, new n();
    var g = new s(), b = new r();
    l.prototype.calculateWorldAABB = function(t3, e2, o2, i2) {
      g.position = t3, g.quaternion = e2, this.aabb.toWorldFrame(g, b), o2.copy(b.lowerBound), i2.copy(b.upperBound);
    }, l.prototype.volume = function() {
      return 4 * Math.PI * this.boundingSphereRadius / 3;
    }, l.createTorus = function(t3, e2, o2, i2, n2) {
      t3 = t3 || 1, e2 = e2 || 0.5, o2 = o2 || 8, i2 = i2 || 6, n2 = n2 || 2 * Math.PI;
      for (var s2 = [], r2 = [], a2 = 0; a2 <= o2; a2++)
        for (var h2 = 0; h2 <= i2; h2++) {
          var p2 = h2 / i2 * n2, c2 = a2 / o2 * Math.PI * 2, u2 = (t3 + e2 * Math.cos(c2)) * Math.cos(p2), d2 = (t3 + e2 * Math.cos(c2)) * Math.sin(p2), v2 = e2 * Math.sin(c2);
          s2.push(u2, d2, v2);
        }
      for (var a2 = 1; a2 <= o2; a2++)
        for (var h2 = 1; h2 <= i2; h2++) {
          var y2 = (i2 + 1) * a2 + h2 - 1, f2 = (i2 + 1) * (a2 - 1) + h2 - 1, m2 = (i2 + 1) * (a2 - 1) + h2, w2 = (i2 + 1) * a2 + h2;
          r2.push(y2, f2, w2), r2.push(f2, m2, w2);
        }
      return new l(s2, r2);
    };
  }, { "../collision/AABB": 3, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../utils/Octree": 50, "./Shape": 43 }], 46: [function(t2, e, o) {
    e.exports = n, t2("../math/Vec3"), t2("../math/Quaternion");
    var i = t2("./Solver");
    function n() {
      i.call(this), this.iterations = 10, this.tolerance = 1e-7;
    }
    n.prototype = new i();
    var s = [], r = [], a = [];
    n.prototype.solve = function(t3, e2) {
      var o2, i2, n2, l, h, p = 0, c = this.iterations, u = this.tolerance * this.tolerance, d = this.equations, v = d.length, y = e2.bodies, f = y.length;
      if (0 !== v)
        for (var m = 0; m !== f; m++)
          y[m].updateSolveMassProperties();
      r.length = v, a.length = v, s.length = v;
      for (var m = 0; m !== v; m++) {
        var w = d[m];
        s[m] = 0, a[m] = w.computeB(t3), r[m] = 1 / w.computeC();
      }
      if (0 !== v) {
        for (var m = 0; m !== f; m++) {
          var x = y[m], g = x.vlambda, b = x.wlambda;
          g.set(0, 0, 0), b && b.set(0, 0, 0);
        }
        for (p = 0; p !== c; p++) {
          l = 0;
          for (var B = 0; B !== v; B++) {
            var w = d[B];
            o2 = a[B], i2 = r[B], h = s[B], n2 = i2 * (o2 - w.computeGWlambda() - w.eps * h), h + n2 < w.minForce ? n2 = w.minForce - h : h + n2 > w.maxForce && (n2 = w.maxForce - h), s[B] += n2, l += n2 > 0 ? n2 : -n2, w.addToWlambda(n2);
          }
          if (l * l < u)
            break;
        }
        for (var m = 0; m !== f; m++) {
          var x = y[m], E = x.velocity, A = x.angularVelocity;
          E.vadd(x.vlambda, E), A && A.vadd(x.wlambda, A);
        }
      }
      return p;
    };
  }, { "../math/Quaternion": 28, "../math/Vec3": 30, "./Solver": 47 }], 47: [function(t2, e, o) {
    function i() {
      this.equations = [];
    }
    e.exports = i, i.prototype.solve = function(t3, e2) {
      return 0;
    }, i.prototype.addEquation = function(t3) {
      t3.enabled && this.equations.push(t3);
    }, i.prototype.removeEquation = function(t3) {
      var e2 = this.equations, o2 = e2.indexOf(t3);
      -1 !== o2 && e2.splice(o2, 1);
    }, i.prototype.removeAllEquations = function() {
      this.equations.length = 0;
    };
  }, {}], 48: [function(t2, e, o) {
    e.exports = s, t2("../math/Vec3"), t2("../math/Quaternion");
    var i = t2("./Solver"), n = t2("../objects/Body");
    function s(t3) {
      for (i.call(this), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = t3, this.nodes = [], this.nodePool = []; this.nodePool.length < 128; )
        this.nodePool.push(this.createNode());
    }
    s.prototype = new i();
    var r = [], a = [], l = { bodies: [] }, h = n.STATIC;
    function p(t3) {
      for (var e2 = t3.length, o2 = 0; o2 !== e2; o2++) {
        var i2 = t3[o2];
        if (!i2.visited && !(i2.body.type & h))
          return i2;
      }
      return false;
    }
    var c = [];
    function u(t3, e2, o2) {
      e2.push(t3.body);
      for (var i2 = t3.eqs.length, n2 = 0; n2 !== i2; n2++) {
        var s2 = t3.eqs[n2];
        -1 === o2.indexOf(s2) && o2.push(s2);
      }
    }
    function d(t3, e2) {
      return e2.id - t3.id;
    }
    s.prototype.createNode = function() {
      return { body: null, children: [], eqs: [], visited: false };
    }, s.prototype.solve = function(t3, e2) {
      for (var o2 = this.nodePool, i2 = e2.bodies, n2 = this.equations, s2 = n2.length, h2 = i2.length, v = this.subsolver; o2.length < h2; )
        o2.push(this.createNode());
      r.length = h2;
      for (var y = 0; y < h2; y++)
        r[y] = o2[y];
      for (var y = 0; y !== h2; y++) {
        var f = r[y];
        f.body = i2[y], f.children.length = 0, f.eqs.length = 0, f.visited = false;
      }
      for (var m = 0; m !== s2; m++) {
        var w = n2[m], y = i2.indexOf(w.bi), x = i2.indexOf(w.bj), g = r[y], b = r[x];
        g.children.push(b), g.eqs.push(w), b.children.push(g), b.eqs.push(w);
      }
      var B, E = 0, A = a;
      for (v.tolerance = this.tolerance, v.iterations = this.iterations; B = p(r); ) {
        A.length = 0, l.bodies.length = 0, function(t4, e3, o3, i3) {
          for (c.push(t4), t4.visited = true, e3(t4, o3, i3); c.length; )
            for (var n3, s3 = c.pop(); n3 = p(s3.children); )
              n3.visited = true, e3(n3, o3, i3), c.push(n3);
        }(B, u, l.bodies, A);
        var S = A.length;
        A = A.sort(d);
        for (var y = 0; y !== S; y++)
          v.addEquation(A[y]);
        v.solve(t3, l), v.removeAllEquations(), E++;
      }
      return E;
    };
  }, { "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "./Solver": 47 }], 49: [function(t2, e, o) {
    var i = function() {
    };
    e.exports = i, i.prototype = { constructor: i, addEventListener: function(t3, e2) {
      void 0 === this._listeners && (this._listeners = {});
      var o2 = this._listeners;
      return void 0 === o2[t3] && (o2[t3] = []), -1 === o2[t3].indexOf(e2) && o2[t3].push(e2), this;
    }, hasEventListener: function(t3, e2) {
      if (void 0 === this._listeners)
        return false;
      var o2 = this._listeners;
      return void 0 !== o2[t3] && -1 !== o2[t3].indexOf(e2);
    }, removeEventListener: function(t3, e2) {
      if (void 0 === this._listeners)
        return this;
      var o2 = this._listeners;
      if (void 0 === o2[t3])
        return this;
      var i2 = o2[t3].indexOf(e2);
      return -1 !== i2 && o2[t3].splice(i2, 1), this;
    }, dispatchEvent: function(t3) {
      if (void 0 === this._listeners)
        return this;
      var e2 = this._listeners[t3.type];
      if (void 0 !== e2) {
        t3.target = this;
        for (var o2 = 0, i2 = e2.length; o2 < i2; o2++)
          e2[o2].call(this, t3);
      }
      return this;
    } };
  }, {}], 50: [function(t2, e, o) {
    var i = t2("../collision/AABB"), n = t2("../math/Vec3");
    function s(t3) {
      t3 = t3 || {}, this.root = t3.root || null, this.aabb = t3.aabb ? t3.aabb.clone() : new i(), this.data = [], this.children = [];
    }
    function r(t3, e2) {
      (e2 = e2 || {}).root = null, e2.aabb = t3, s.call(this, e2), this.maxDepth = void 0 !== e2.maxDepth ? e2.maxDepth : 8;
    }
    e.exports = r, r.prototype = new s(), s.prototype.reset = function(t3, e2) {
      this.children.length = this.data.length = 0;
    }, s.prototype.insert = function(t3, e2, o2) {
      var i2 = this.data;
      if (o2 = o2 || 0, !this.aabb.contains(t3))
        return false;
      var n2 = this.children;
      if (o2 < (this.maxDepth || this.root.maxDepth)) {
        var s2 = false;
        n2.length || (this.subdivide(), s2 = true);
        for (var r2 = 0; 8 !== r2; r2++)
          if (n2[r2].insert(t3, e2, o2 + 1))
            return true;
        s2 && (n2.length = 0);
      }
      return i2.push(e2), true;
    };
    var a = new n();
    s.prototype.subdivide = function() {
      var t3 = this.aabb, e2 = t3.lowerBound, o2 = t3.upperBound, r2 = this.children;
      r2.push(new s({ aabb: new i({ lowerBound: new n(0, 0, 0) }) }), new s({ aabb: new i({ lowerBound: new n(1, 0, 0) }) }), new s({ aabb: new i({ lowerBound: new n(1, 1, 0) }) }), new s({ aabb: new i({ lowerBound: new n(1, 1, 1) }) }), new s({ aabb: new i({ lowerBound: new n(0, 1, 1) }) }), new s({ aabb: new i({ lowerBound: new n(0, 0, 1) }) }), new s({ aabb: new i({ lowerBound: new n(1, 0, 1) }) }), new s({ aabb: new i({ lowerBound: new n(0, 1, 0) }) })), o2.vsub(e2, a), a.scale(0.5, a);
      for (var l2 = this.root || this, h = 0; 8 !== h; h++) {
        var p = r2[h];
        p.root = l2;
        var c = p.aabb.lowerBound;
        c.x *= a.x, c.y *= a.y, c.z *= a.z, c.vadd(e2, c), c.vadd(a, p.aabb.upperBound);
      }
    }, s.prototype.aabbQuery = function(t3, e2) {
      this.data, this.children;
      for (var o2 = [this]; o2.length; ) {
        var i2 = o2.pop();
        i2.aabb.overlaps(t3) && Array.prototype.push.apply(e2, i2.data), Array.prototype.push.apply(o2, i2.children);
      }
      return e2;
    };
    var l = new i();
    s.prototype.rayQuery = function(t3, e2, o2) {
      return t3.getAABB(l), l.toLocalFrame(e2, l), this.aabbQuery(l, o2), o2;
    }, s.prototype.removeEmptyNodes = function() {
      for (var t3 = [this]; t3.length; ) {
        for (var e2 = t3.pop(), o2 = e2.children.length - 1; o2 >= 0; o2--)
          e2.children[o2].data.length || e2.children.splice(o2, 1);
        Array.prototype.push.apply(t3, e2.children);
      }
    };
  }, { "../collision/AABB": 3, "../math/Vec3": 30 }], 51: [function(t2, e, o) {
    function i() {
      this.objects = [], this.type = Object;
    }
    e.exports = i, i.prototype.release = function() {
      for (var t3 = arguments.length, e2 = 0; e2 !== t3; e2++)
        this.objects.push(arguments[e2]);
    }, i.prototype.get = function() {
      return 0 === this.objects.length ? this.constructObject() : this.objects.pop();
    }, i.prototype.constructObject = function() {
      throw Error("constructObject() not implemented in this Pool subclass yet!");
    };
  }, {}], 52: [function(t2, e, o) {
    function i() {
      this.data = { keys: [] };
    }
    e.exports = i, i.prototype.get = function(t3, e2) {
      if (t3 > e2) {
        var o2 = e2;
        e2 = t3, t3 = o2;
      }
      return this.data[t3 + "-" + e2];
    }, i.prototype.set = function(t3, e2, o2) {
      if (t3 > e2) {
        var i2 = e2;
        e2 = t3, t3 = i2;
      }
      var n = t3 + "-" + e2;
      this.get(t3, e2) || this.data.keys.push(n), this.data[n] = o2;
    }, i.prototype.reset = function() {
      for (var t3 = this.data, e2 = t3.keys; e2.length > 0; ) {
        var o2 = e2.pop();
        delete t3[o2];
      }
    };
  }, {}], 53: [function(t2, e, o) {
    function i() {
    }
    e.exports = i, i.defaults = function(t3, e2) {
      for (var o2 in t3 = t3 || {}, e2)
        o2 in t3 || (t3[o2] = e2[o2]);
      return t3;
    };
  }, {}], 54: [function(t2, e, o) {
    e.exports = s;
    var i = t2("../math/Vec3"), n = t2("./Pool");
    function s() {
      n.call(this), this.type = i;
    }
    s.prototype = new n(), s.prototype.constructObject = function() {
      return new i();
    };
  }, { "../math/Vec3": 30, "./Pool": 51 }], 55: [function(t2, e, o) {
    e.exports = u;
    var i = t2("../collision/AABB"), n = t2("../shapes/Shape"), s = t2("../collision/Ray"), r = t2("../math/Vec3"), a = t2("../math/Transform");
    t2("../shapes/ConvexPolyhedron");
    var l = t2("../math/Quaternion");
    t2("../solver/Solver");
    var h = t2("../utils/Vec3Pool"), p = t2("../equations/ContactEquation"), c = t2("../equations/FrictionEquation");
    function u(t3) {
      this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], this.v3pool = new h(), this.world = t3, this.currentContactMaterial = null, this.enableFrictionReduction = false;
    }
    u.prototype.createContactEquation = function(t3, e2, o2, i2, n2, s2) {
      this.contactPointPool.length ? ((r2 = this.contactPointPool.pop()).bi = t3, r2.bj = e2) : r2 = new p(t3, e2), r2.enabled = t3.collisionResponse && e2.collisionResponse && o2.collisionResponse && i2.collisionResponse;
      var r2, a2 = this.currentContactMaterial;
      r2.restitution = a2.restitution, r2.setSpookParams(a2.contactEquationStiffness, a2.contactEquationRelaxation, this.world.dt);
      var l2 = o2.material || t3.material, h2 = i2.material || e2.material;
      return l2 && h2 && l2.restitution >= 0 && h2.restitution >= 0 && (r2.restitution = l2.restitution * h2.restitution), r2.si = n2 || o2, r2.sj = s2 || i2, r2;
    }, u.prototype.createFrictionEquationsFromContact = function(t3, e2) {
      var o2 = t3.bi, i2 = t3.bj, n2 = t3.si, s2 = t3.sj, r2 = this.world, a2 = this.currentContactMaterial, l2 = a2.friction, h2 = n2.material || o2.material, p2 = s2.material || i2.material;
      if (h2 && p2 && h2.friction >= 0 && p2.friction >= 0 && (l2 = h2.friction * p2.friction), l2 > 0) {
        var u2 = l2 * r2.gravity.length(), d2 = o2.invMass + i2.invMass;
        d2 > 0 && (d2 = 1 / d2);
        var v2 = this.frictionEquationPool, y2 = v2.length ? v2.pop() : new c(o2, i2, u2 * d2), f2 = v2.length ? v2.pop() : new c(o2, i2, u2 * d2);
        return y2.bi = f2.bi = o2, y2.bj = f2.bj = i2, y2.minForce = f2.minForce = -u2 * d2, y2.maxForce = f2.maxForce = u2 * d2, y2.ri.copy(t3.ri), y2.rj.copy(t3.rj), f2.ri.copy(t3.ri), f2.rj.copy(t3.rj), t3.ni.tangents(y2.t, f2.t), y2.setSpookParams(a2.frictionEquationStiffness, a2.frictionEquationRelaxation, r2.dt), f2.setSpookParams(a2.frictionEquationStiffness, a2.frictionEquationRelaxation, r2.dt), y2.enabled = f2.enabled = t3.enabled, e2.push(y2, f2), true;
      }
      return false;
    };
    var d = new r(), v = new r(), y = new r();
    u.prototype.createFrictionFromAverage = function(t3) {
      var e2 = this.result[this.result.length - 1];
      if (this.createFrictionEquationsFromContact(e2, this.frictionResult) && 1 !== t3) {
        var o2 = this.frictionResult[this.frictionResult.length - 2], i2 = this.frictionResult[this.frictionResult.length - 1];
        d.setZero(), v.setZero(), y.setZero();
        var n2 = e2.bi;
        e2.bj;
        for (var s2 = 0; s2 !== t3; s2++)
          (e2 = this.result[this.result.length - 1 - s2]).bodyA !== n2 ? (d.vadd(e2.ni, d), v.vadd(e2.ri, v), y.vadd(e2.rj, y)) : (d.vsub(e2.ni, d), v.vadd(e2.rj, v), y.vadd(e2.ri, y));
        var r2 = 1 / t3;
        v.scale(r2, o2.ri), y.scale(r2, o2.rj), i2.ri.copy(o2.ri), i2.rj.copy(o2.rj), d.normalize(), d.tangents(o2.t, i2.t);
      }
    };
    var f = new r(), m = new r(), w = new l(), x = new l();
    u.prototype.getContacts = function(t3, e2, o2, i2, n2, s2, r2) {
      this.contactPointPool = n2, this.frictionEquationPool = r2, this.result = i2, this.frictionResult = s2;
      for (var a2 = 0, l2 = t3.length; a2 !== l2; a2++) {
        var h2 = t3[a2], p2 = e2[a2], c2 = null;
        h2.material && p2.material && (c2 = o2.getContactMaterial(h2.material, p2.material) || null);
        for (var u2 = 0; u2 < h2.shapes.length; u2++) {
          h2.quaternion.mult(h2.shapeOrientations[u2], w), h2.quaternion.vmult(h2.shapeOffsets[u2], f), f.vadd(h2.position, f);
          for (var d2 = h2.shapes[u2], v2 = 0; v2 < p2.shapes.length; v2++) {
            p2.quaternion.mult(p2.shapeOrientations[v2], x), p2.quaternion.vmult(p2.shapeOffsets[v2], m), m.vadd(p2.position, m);
            var y2 = p2.shapes[v2];
            if (!(f.distanceTo(m) > d2.boundingSphereRadius + y2.boundingSphereRadius)) {
              var g2 = null;
              d2.material && y2.material && (g2 = o2.getContactMaterial(d2.material, y2.material) || null), this.currentContactMaterial = g2 || c2 || o2.defaultContactMaterial;
              var b2 = this[d2.type | y2.type];
              b2 && (d2.type < y2.type ? b2.call(this, d2, y2, f, m, w, x, h2, p2, d2, y2) : b2.call(this, y2, d2, m, f, x, w, p2, h2, d2, y2));
            }
          }
        }
      }
    }, u.prototype[n.types.BOX | n.types.BOX] = u.prototype.boxBox = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      t3.convexPolyhedronRepresentation.material = t3.material, e2.convexPolyhedronRepresentation.material = e2.material, t3.convexPolyhedronRepresentation.collisionResponse = t3.collisionResponse, e2.convexPolyhedronRepresentation.collisionResponse = e2.collisionResponse, this.convexConvex(t3.convexPolyhedronRepresentation, e2.convexPolyhedronRepresentation, o2, i2, n2, s2, r2, a2, t3, e2);
    }, u.prototype[n.types.BOX | n.types.CONVEXPOLYHEDRON] = u.prototype.boxConvex = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      t3.convexPolyhedronRepresentation.material = t3.material, t3.convexPolyhedronRepresentation.collisionResponse = t3.collisionResponse, this.convexConvex(t3.convexPolyhedronRepresentation, e2, o2, i2, n2, s2, r2, a2, t3, e2);
    }, u.prototype[n.types.BOX | n.types.PARTICLE] = u.prototype.boxParticle = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      t3.convexPolyhedronRepresentation.material = t3.material, t3.convexPolyhedronRepresentation.collisionResponse = t3.collisionResponse, this.convexParticle(t3.convexPolyhedronRepresentation, e2, o2, i2, n2, s2, r2, a2, t3, e2);
    }, u.prototype[n.types.SPHERE] = u.prototype.sphereSphere = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      var l2 = this.createContactEquation(r2, a2, t3, e2);
      i2.vsub(o2, l2.ni), l2.ni.normalize(), l2.ri.copy(l2.ni), l2.rj.copy(l2.ni), l2.ri.mult(t3.radius, l2.ri), l2.rj.mult(-e2.radius, l2.rj), l2.ri.vadd(o2, l2.ri), l2.ri.vsub(r2.position, l2.ri), l2.rj.vadd(i2, l2.rj), l2.rj.vsub(a2.position, l2.rj), this.result.push(l2), this.createFrictionEquationsFromContact(l2, this.frictionResult);
    };
    var g = new r(), b = new r(), B = new r();
    u.prototype[n.types.PLANE | n.types.TRIMESH] = u.prototype.planeTrimesh = function(t3, e2, o2, i2, n2, s2, l2, h2) {
      var p2 = new r();
      g.set(0, 0, 1), n2.vmult(g, g);
      for (var c2 = 0; c2 < e2.vertices.length / 3; c2++) {
        e2.getVertex(c2, p2);
        var u2 = new r();
        if (u2.copy(p2), a.pointToWorldFrame(i2, s2, u2, p2), p2.vsub(o2, b), 0 >= g.dot(b)) {
          var d2 = this.createContactEquation(l2, h2, t3, e2);
          d2.ni.copy(g), g.scale(b.dot(g), B), p2.vsub(B, B), d2.ri.copy(B), d2.ri.vsub(l2.position, d2.ri), d2.rj.copy(p2), d2.rj.vsub(h2.position, d2.rj), this.result.push(d2), this.createFrictionEquationsFromContact(d2, this.frictionResult);
        }
      }
    };
    var E = new r(), A = new r();
    new r();
    var S = new r(), C = new r(), z = new r(), q = new r(), R = new r(), M = new r(), P = new r(), F = new r(), V = new r(), T = new r(), I = new r(), N = new i(), W = [];
    u.prototype[n.types.SPHERE | n.types.TRIMESH] = u.prototype.sphereTrimesh = function(t3, e2, o2, i2, n2, r2, l2, h2) {
      a.pointToLocalFrame(i2, r2, o2, P);
      var p2 = t3.radius;
      N.lowerBound.set(P.x - p2, P.y - p2, P.z - p2), N.upperBound.set(P.x + p2, P.y + p2, P.z + p2), e2.getTrianglesInAABB(N, W);
      for (var c2 = t3.radius * t3.radius, u2 = 0; u2 < W.length; u2++)
        for (var d2 = 0; d2 < 3; d2++)
          if (e2.getVertex(e2.indices[3 * W[u2] + d2], S), S.vsub(P, A), A.norm2() <= c2) {
            C.copy(S), a.pointToWorldFrame(i2, r2, C, S), S.vsub(o2, A);
            var v2 = this.createContactEquation(l2, h2, t3, e2);
            v2.ni.copy(A), v2.ni.normalize(), v2.ri.copy(v2.ni), v2.ri.scale(t3.radius, v2.ri), v2.ri.vadd(o2, v2.ri), v2.ri.vsub(l2.position, v2.ri), v2.rj.copy(S), v2.rj.vsub(h2.position, v2.rj), this.result.push(v2), this.createFrictionEquationsFromContact(v2, this.frictionResult);
          }
      for (var u2 = 0; u2 < W.length; u2++)
        for (var d2 = 0; d2 < 3; d2++) {
          e2.getVertex(e2.indices[3 * W[u2] + d2], z), e2.getVertex(e2.indices[3 * W[u2] + (d2 + 1) % 3], q), q.vsub(z, R), P.vsub(q, F);
          var y2 = F.dot(R);
          P.vsub(z, F);
          var f2 = F.dot(R);
          if (f2 > 0 && y2 < 0) {
            P.vsub(z, F), M.copy(R), M.normalize(), f2 = F.dot(M), M.scale(f2, F), F.vadd(z, F);
            var m2 = F.distanceTo(P);
            if (m2 < t3.radius) {
              var v2 = this.createContactEquation(l2, h2, t3, e2);
              F.vsub(P, v2.ni), v2.ni.normalize(), v2.ni.scale(t3.radius, v2.ri), a.pointToWorldFrame(i2, r2, F, F), F.vsub(h2.position, v2.rj), a.vectorToWorldFrame(r2, v2.ni, v2.ni), a.vectorToWorldFrame(r2, v2.ri, v2.ri), this.result.push(v2), this.createFrictionEquationsFromContact(v2, this.frictionResult);
            }
          }
        }
      for (var u2 = 0, w2 = W.length; u2 !== w2; u2++) {
        e2.getTriangleVertices(W[u2], V, T, I), e2.getNormal(W[u2], E), P.vsub(V, F);
        var m2 = F.dot(E);
        if (E.scale(m2, F), P.vsub(F, F), m2 = F.distanceTo(P), s.pointInTriangle(F, V, T, I) && m2 < t3.radius) {
          var v2 = this.createContactEquation(l2, h2, t3, e2);
          F.vsub(P, v2.ni), v2.ni.normalize(), v2.ni.scale(t3.radius, v2.ri), a.pointToWorldFrame(i2, r2, F, F), F.vsub(h2.position, v2.rj), a.vectorToWorldFrame(r2, v2.ni, v2.ni), a.vectorToWorldFrame(r2, v2.ri, v2.ri), this.result.push(v2), this.createFrictionEquationsFromContact(v2, this.frictionResult);
        }
      }
      W.length = 0;
    };
    var L = new r(), j = new r();
    u.prototype[n.types.SPHERE | n.types.PLANE] = u.prototype.spherePlane = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      var l2 = this.createContactEquation(r2, a2, t3, e2);
      if (l2.ni.set(0, 0, 1), s2.vmult(l2.ni, l2.ni), l2.ni.negate(l2.ni), l2.ni.normalize(), l2.ni.mult(t3.radius, l2.ri), o2.vsub(i2, L), l2.ni.mult(l2.ni.dot(L), j), L.vsub(j, l2.rj), -L.dot(l2.ni) <= t3.radius) {
        var h2 = l2.ri, p2 = l2.rj;
        h2.vadd(o2, h2), h2.vsub(r2.position, h2), p2.vadd(i2, p2), p2.vsub(a2.position, p2), this.result.push(l2), this.createFrictionEquationsFromContact(l2, this.frictionResult);
      }
    };
    var O = new r(), k = new r(), _ = new r(), U = new r(), H = new r(), D = new r(), X = new r(), G = [new r(), new r(), new r(), new r(), new r(), new r()], Y = new r(), Q = new r(), Z = new r(), K = new r();
    u.prototype[n.types.SPHERE | n.types.BOX] = u.prototype.sphereBox = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      var l2 = this.v3pool;
      o2.vsub(i2, U), e2.getSideNormals(G, s2);
      for (var h2 = t3.radius, p2 = false, c2 = null, u2 = 0, d2 = 0, v2 = 0, y2 = null, f2 = 0, m2 = G.length; f2 !== m2 && false === p2; f2++) {
        H.copy(G[f2]);
        var w2 = H.norm();
        H.normalize();
        var x2 = U.dot(H);
        if (x2 < w2 + h2 && x2 > 0) {
          D.copy(G[(f2 + 1) % 3]), X.copy(G[(f2 + 2) % 3]);
          var g2 = D.norm(), b2 = X.norm();
          D.normalize(), X.normalize();
          var B2 = U.dot(D), E2 = U.dot(X);
          if (B2 < g2 && B2 > -g2 && E2 < b2 && E2 > -b2) {
            var A2 = Math.abs(x2 - w2 - h2);
            (null === y2 || A2 < y2) && (y2 = A2, d2 = B2, v2 = E2, c2 = w2, Q.copy(H), Z.copy(D), K.copy(X), u2++);
          }
        }
      }
      if (u2) {
        p2 = true;
        var S2 = this.createContactEquation(r2, a2, t3, e2);
        Q.mult(-h2, S2.ri), S2.ni.copy(Q), S2.ni.negate(S2.ni), Q.mult(c2, Q), Z.mult(d2, Z), Q.vadd(Z, Q), K.mult(v2, K), Q.vadd(K, S2.rj), S2.ri.vadd(o2, S2.ri), S2.ri.vsub(r2.position, S2.ri), S2.rj.vadd(i2, S2.rj), S2.rj.vsub(a2.position, S2.rj), this.result.push(S2), this.createFrictionEquationsFromContact(S2, this.frictionResult);
      }
      for (var C2 = l2.get(), z2 = 0; 2 !== z2 && !p2; z2++)
        for (var q2 = 0; 2 !== q2 && !p2; q2++)
          for (var R2 = 0; 2 !== R2 && !p2; R2++)
            if (C2.set(0, 0, 0), z2 ? C2.vadd(G[0], C2) : C2.vsub(G[0], C2), q2 ? C2.vadd(G[1], C2) : C2.vsub(G[1], C2), R2 ? C2.vadd(G[2], C2) : C2.vsub(G[2], C2), i2.vadd(C2, Y), Y.vsub(o2, Y), Y.norm2() < h2 * h2) {
              p2 = true;
              var S2 = this.createContactEquation(r2, a2, t3, e2);
              S2.ri.copy(Y), S2.ri.normalize(), S2.ni.copy(S2.ri), S2.ri.mult(h2, S2.ri), S2.rj.copy(C2), S2.ri.vadd(o2, S2.ri), S2.ri.vsub(r2.position, S2.ri), S2.rj.vadd(i2, S2.rj), S2.rj.vsub(a2.position, S2.rj), this.result.push(S2), this.createFrictionEquationsFromContact(S2, this.frictionResult);
            }
      l2.release(C2), C2 = null;
      for (var M2 = l2.get(), P2 = l2.get(), S2 = l2.get(), F2 = l2.get(), A2 = l2.get(), V2 = G.length, z2 = 0; z2 !== V2 && !p2; z2++)
        for (var q2 = 0; q2 !== V2 && !p2; q2++)
          if (z2 % 3 != q2 % 3) {
            G[q2].cross(G[z2], M2), M2.normalize(), G[z2].vadd(G[q2], P2), S2.copy(o2), S2.vsub(P2, S2), S2.vsub(i2, S2);
            var T2 = S2.dot(M2);
            M2.mult(T2, F2);
            for (var R2 = 0; R2 === z2 % 3 || R2 === q2 % 3; )
              R2++;
            A2.copy(o2), A2.vsub(F2, A2), A2.vsub(P2, A2), A2.vsub(i2, A2);
            var I2 = Math.abs(T2), N2 = A2.norm();
            if (I2 < G[R2].norm() && N2 < h2) {
              p2 = true;
              var W2 = this.createContactEquation(r2, a2, t3, e2);
              P2.vadd(F2, W2.rj), W2.rj.copy(W2.rj), A2.negate(W2.ni), W2.ni.normalize(), W2.ri.copy(W2.rj), W2.ri.vadd(i2, W2.ri), W2.ri.vsub(o2, W2.ri), W2.ri.normalize(), W2.ri.mult(h2, W2.ri), W2.ri.vadd(o2, W2.ri), W2.ri.vsub(r2.position, W2.ri), W2.rj.vadd(i2, W2.rj), W2.rj.vsub(a2.position, W2.rj), this.result.push(W2), this.createFrictionEquationsFromContact(W2, this.frictionResult);
            }
          }
      l2.release(M2, P2, S2, F2, A2);
    };
    var J = new r(), $ = new r(), tt = new r(), te = new r(), to = new r(), ti = new r(), tn = new r(), ts = new r(), tr = new r(), ta = new r();
    u.prototype[n.types.SPHERE | n.types.CONVEXPOLYHEDRON] = u.prototype.sphereConvex = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      var l2 = this.v3pool;
      o2.vsub(i2, J);
      for (var h2 = e2.faceNormals, p2 = e2.faces, c2 = e2.vertices, u2 = t3.radius, d2 = 0; d2 !== c2.length; d2++) {
        var v2 = c2[d2];
        if (s2.vmult(v2, to), i2.vadd(to, to), to.vsub(o2, te), te.norm2() < u2 * u2) {
          f2 = true;
          var y2 = this.createContactEquation(r2, a2, t3, e2);
          y2.ri.copy(te), y2.ri.normalize(), y2.ni.copy(y2.ri), y2.ri.mult(u2, y2.ri), to.vsub(i2, y2.rj), y2.ri.vadd(o2, y2.ri), y2.ri.vsub(r2.position, y2.ri), y2.rj.vadd(i2, y2.rj), y2.rj.vsub(a2.position, y2.rj), this.result.push(y2), this.createFrictionEquationsFromContact(y2, this.frictionResult);
          return;
        }
      }
      for (var f2 = false, d2 = 0, m2 = p2.length; d2 !== m2 && false === f2; d2++) {
        var w2 = h2[d2], x2 = p2[d2];
        s2.vmult(w2, ti), s2.vmult(c2[x2[0]], tn), tn.vadd(i2, tn), ti.mult(-u2, ts), o2.vadd(ts, ts), ts.vsub(tn, tr);
        var g2 = tr.dot(ti);
        if (o2.vsub(tn, ta), g2 < 0 && ta.dot(ti) > 0) {
          for (var b2 = [], B2 = 0, E2 = x2.length; B2 !== E2; B2++) {
            var A2 = l2.get();
            s2.vmult(c2[x2[B2]], A2), i2.vadd(A2, A2), b2.push(A2);
          }
          if (function(t4, e3, o3) {
            for (var i3 = null, n3 = t4.length, s3 = 0; s3 !== n3; s3++) {
              var r3 = t4[s3];
              t4[(s3 + 1) % n3].vsub(r3, O), O.cross(e3, k), o3.vsub(r3, _);
              var a3 = k.dot(_);
              if (null !== i3 && (!(a3 > 0) || true !== i3) && (!(a3 <= 0) || false !== i3))
                return false;
              null === i3 && (i3 = a3 > 0);
            }
            return true;
          }(b2, ti, o2)) {
            f2 = true;
            var y2 = this.createContactEquation(r2, a2, t3, e2);
            ti.mult(-u2, y2.ri), ti.negate(y2.ni);
            var S2 = l2.get();
            ti.mult(-g2, S2);
            var C2 = l2.get();
            ti.mult(-u2, C2), o2.vsub(i2, y2.rj), y2.rj.vadd(C2, y2.rj), y2.rj.vadd(S2, y2.rj), y2.rj.vadd(i2, y2.rj), y2.rj.vsub(a2.position, y2.rj), y2.ri.vadd(o2, y2.ri), y2.ri.vsub(r2.position, y2.ri), l2.release(S2), l2.release(C2), this.result.push(y2), this.createFrictionEquationsFromContact(y2, this.frictionResult);
            for (var B2 = 0, z2 = b2.length; B2 !== z2; B2++)
              l2.release(b2[B2]);
            return;
          }
          for (var B2 = 0; B2 !== x2.length; B2++) {
            var q2 = l2.get(), R2 = l2.get();
            s2.vmult(c2[x2[(B2 + 1) % x2.length]], q2), s2.vmult(c2[x2[(B2 + 2) % x2.length]], R2), i2.vadd(q2, q2), i2.vadd(R2, R2), R2.vsub(q2, $), $.unit(tt);
            var M2 = l2.get(), P2 = l2.get();
            o2.vsub(q2, P2);
            var F2 = P2.dot(tt);
            tt.mult(F2, M2), M2.vadd(q2, M2);
            var V2 = l2.get();
            if (M2.vsub(o2, V2), F2 > 0 && F2 * F2 < $.norm2() && V2.norm2() < u2 * u2) {
              var y2 = this.createContactEquation(r2, a2, t3, e2);
              M2.vsub(i2, y2.rj), M2.vsub(o2, y2.ni), y2.ni.normalize(), y2.ni.mult(u2, y2.ri), y2.rj.vadd(i2, y2.rj), y2.rj.vsub(a2.position, y2.rj), y2.ri.vadd(o2, y2.ri), y2.ri.vsub(r2.position, y2.ri), this.result.push(y2), this.createFrictionEquationsFromContact(y2, this.frictionResult);
              for (var B2 = 0, z2 = b2.length; B2 !== z2; B2++)
                l2.release(b2[B2]);
              l2.release(q2), l2.release(R2), l2.release(M2), l2.release(V2), l2.release(P2);
              return;
            }
            l2.release(q2), l2.release(R2), l2.release(M2), l2.release(V2), l2.release(P2);
          }
          for (var B2 = 0, z2 = b2.length; B2 !== z2; B2++)
            l2.release(b2[B2]);
        }
      }
    }, new r(), new r(), u.prototype[n.types.PLANE | n.types.BOX] = u.prototype.planeBox = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      e2.convexPolyhedronRepresentation.material = e2.material, e2.convexPolyhedronRepresentation.collisionResponse = e2.collisionResponse, this.planeConvex(t3, e2.convexPolyhedronRepresentation, o2, i2, n2, s2, r2, a2);
    };
    var tl = new r(), th = new r(), tp = new r(), tc = new r();
    u.prototype[n.types.PLANE | n.types.CONVEXPOLYHEDRON] = u.prototype.planeConvex = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      th.set(0, 0, 1), n2.vmult(th, th);
      for (var l2 = 0, h2 = 0; h2 !== e2.vertices.length; h2++)
        if (tl.copy(e2.vertices[h2]), s2.vmult(tl, tl), i2.vadd(tl, tl), tl.vsub(o2, tp), 0 >= th.dot(tp)) {
          var p2 = this.createContactEquation(r2, a2, t3, e2);
          th.mult(th.dot(tp), tc), tl.vsub(tc, tc), tc.vsub(o2, p2.ri), p2.ni.copy(th), tl.vsub(i2, p2.rj), p2.ri.vadd(o2, p2.ri), p2.ri.vsub(r2.position, p2.ri), p2.rj.vadd(i2, p2.rj), p2.rj.vsub(a2.position, p2.rj), this.result.push(p2), l2++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(p2, this.frictionResult);
        }
      this.enableFrictionReduction && l2 && this.createFrictionFromAverage(l2);
    };
    var tu = new r(), td = new r();
    u.prototype[n.types.CONVEXPOLYHEDRON] = u.prototype.convexConvex = function(t3, e2, o2, i2, n2, s2, r2, a2, l2, h2, p2, c2) {
      if (!(o2.distanceTo(i2) > t3.boundingSphereRadius + e2.boundingSphereRadius) && t3.findSeparatingAxis(e2, o2, n2, i2, s2, tu, p2, c2)) {
        var u2 = [];
        t3.clipAgainstHull(o2, n2, e2, i2, s2, tu, -100, 100, u2);
        for (var d2 = 0, v2 = 0; v2 !== u2.length; v2++) {
          var y2 = this.createContactEquation(r2, a2, t3, e2, l2, h2), f2 = y2.ri, m2 = y2.rj;
          tu.negate(y2.ni), u2[v2].normal.negate(td), td.mult(u2[v2].depth, td), u2[v2].point.vadd(td, f2), m2.copy(u2[v2].point), f2.vsub(o2, f2), m2.vsub(i2, m2), f2.vadd(o2, f2), f2.vsub(r2.position, f2), m2.vadd(i2, m2), m2.vsub(a2.position, m2), this.result.push(y2), d2++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(y2, this.frictionResult);
        }
        this.enableFrictionReduction && d2 && this.createFrictionFromAverage(d2);
      }
    };
    var tv = new r(), ty = new r(), tf = new r();
    u.prototype[n.types.PLANE | n.types.PARTICLE] = u.prototype.planeParticle = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      if (tv.set(0, 0, 1), r2.quaternion.vmult(tv, tv), i2.vsub(r2.position, ty), 0 >= tv.dot(ty)) {
        var l2 = this.createContactEquation(a2, r2, e2, t3);
        l2.ni.copy(tv), l2.ni.negate(l2.ni), l2.ri.set(0, 0, 0), tv.mult(tv.dot(i2), tf), i2.vsub(tf, tf), l2.rj.copy(tf), this.result.push(l2), this.createFrictionEquationsFromContact(l2, this.frictionResult);
      }
    };
    var tm = new r();
    u.prototype[n.types.PARTICLE | n.types.SPHERE] = u.prototype.sphereParticle = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      if (tm.set(0, 0, 1), i2.vsub(o2, tm), tm.norm2() <= t3.radius * t3.radius) {
        var l2 = this.createContactEquation(a2, r2, e2, t3);
        tm.normalize(), l2.rj.copy(tm), l2.rj.mult(t3.radius, l2.rj), l2.ni.copy(tm), l2.ni.negate(l2.ni), l2.ri.set(0, 0, 0), this.result.push(l2), this.createFrictionEquationsFromContact(l2, this.frictionResult);
      }
    };
    var tw = new l(), tx = new r();
    new r();
    var tg = new r(), tb = new r(), tB = new r();
    u.prototype[n.types.PARTICLE | n.types.CONVEXPOLYHEDRON] = u.prototype.convexParticle = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      var l2 = -1, h2 = null;
      if (tx.copy(i2), tx.vsub(o2, tx), n2.conjugate(tw), tw.vmult(tx, tx), t3.pointIsInside(tx)) {
        t3.worldVerticesNeedsUpdate && t3.computeWorldVertices(o2, n2), t3.worldFaceNormalsNeedsUpdate && t3.computeWorldFaceNormals(n2);
        for (var p2 = 0, c2 = t3.faces.length; p2 !== c2; p2++) {
          var u2 = [t3.worldVertices[t3.faces[p2][0]]], d2 = t3.worldFaceNormals[p2];
          i2.vsub(u2[0], tb);
          var v2 = -d2.dot(tb);
          (null === h2 || Math.abs(v2) < Math.abs(h2)) && (h2 = v2, l2 = p2, tg.copy(d2));
        }
        if (-1 !== l2) {
          var y2 = this.createContactEquation(a2, r2, e2, t3);
          tg.mult(h2, tB), tB.vadd(i2, tB), tB.vsub(o2, tB), y2.rj.copy(tB), tg.negate(y2.ni), y2.ri.set(0, 0, 0);
          var f2 = y2.ri, m2 = y2.rj;
          f2.vadd(i2, f2), f2.vsub(a2.position, f2), m2.vadd(o2, m2), m2.vsub(r2.position, m2), this.result.push(y2), this.createFrictionEquationsFromContact(y2, this.frictionResult);
        } else
          console.warn("Point found inside convex, but did not find penetrating face!");
      }
    }, u.prototype[n.types.BOX | n.types.HEIGHTFIELD] = u.prototype.boxHeightfield = function(t3, e2, o2, i2, n2, s2, r2, a2) {
      t3.convexPolyhedronRepresentation.material = t3.material, t3.convexPolyhedronRepresentation.collisionResponse = t3.collisionResponse, this.convexHeightfield(t3.convexPolyhedronRepresentation, e2, o2, i2, n2, s2, r2, a2);
    };
    var tE = new r(), tA = new r(), tS = [0];
    u.prototype[n.types.CONVEXPOLYHEDRON | n.types.HEIGHTFIELD] = u.prototype.convexHeightfield = function(t3, e2, o2, i2, n2, s2, r2, l2) {
      var h2 = e2.data, p2 = e2.elementSize, c2 = t3.boundingSphereRadius;
      a.pointToLocalFrame(i2, s2, o2, tE);
      var u2 = Math.floor((tE.x - c2) / p2) - 1, d2 = Math.ceil((tE.x + c2) / p2) + 1, v2 = Math.floor((tE.y - c2) / p2) - 1, y2 = Math.ceil((tE.y + c2) / p2) + 1;
      if (!(d2 < 0) && !(y2 < 0) && !(u2 > h2.length) && !(v2 > h2[0].length)) {
        u2 < 0 && (u2 = 0), d2 < 0 && (d2 = 0), v2 < 0 && (v2 = 0), y2 < 0 && (y2 = 0), u2 >= h2.length && (u2 = h2.length - 1), d2 >= h2.length && (d2 = h2.length - 1), y2 >= h2[0].length && (y2 = h2[0].length - 1), v2 >= h2[0].length && (v2 = h2[0].length - 1);
        var f2 = [];
        e2.getRectMinMax(u2, v2, d2, y2, f2);
        var m2 = f2[0], w2 = f2[1];
        if (!(tE.z - c2 > w2) && !(tE.z + c2 < m2))
          for (var x2 = u2; x2 < d2; x2++)
            for (var g2 = v2; g2 < y2; g2++)
              e2.getConvexTrianglePillar(x2, g2, false), a.pointToWorldFrame(i2, s2, e2.pillarOffset, tA), o2.distanceTo(tA) < e2.pillarConvex.boundingSphereRadius + t3.boundingSphereRadius && this.convexConvex(t3, e2.pillarConvex, o2, tA, n2, s2, r2, l2, null, null, tS, null), e2.getConvexTrianglePillar(x2, g2, true), a.pointToWorldFrame(i2, s2, e2.pillarOffset, tA), o2.distanceTo(tA) < e2.pillarConvex.boundingSphereRadius + t3.boundingSphereRadius && this.convexConvex(t3, e2.pillarConvex, o2, tA, n2, s2, r2, l2, null, null, tS, null);
      }
    };
    var tC = new r(), tz = new r();
    u.prototype[n.types.SPHERE | n.types.HEIGHTFIELD] = u.prototype.sphereHeightfield = function(t3, e2, o2, i2, n2, s2, r2, l2) {
      var h2 = e2.data, p2 = t3.radius, c2 = e2.elementSize;
      a.pointToLocalFrame(i2, s2, o2, tC);
      var u2 = Math.floor((tC.x - p2) / c2) - 1, d2 = Math.ceil((tC.x + p2) / c2) + 1, v2 = Math.floor((tC.y - p2) / c2) - 1, y2 = Math.ceil((tC.y + p2) / c2) + 1;
      if (!(d2 < 0) && !(y2 < 0) && !(u2 > h2.length) && !(y2 > h2[0].length)) {
        u2 < 0 && (u2 = 0), d2 < 0 && (d2 = 0), v2 < 0 && (v2 = 0), y2 < 0 && (y2 = 0), u2 >= h2.length && (u2 = h2.length - 1), d2 >= h2.length && (d2 = h2.length - 1), y2 >= h2[0].length && (y2 = h2[0].length - 1), v2 >= h2[0].length && (v2 = h2[0].length - 1);
        var f2 = [];
        e2.getRectMinMax(u2, v2, d2, y2, f2);
        var m2 = f2[0], w2 = f2[1];
        if (!(tC.z - p2 > w2) && !(tC.z + p2 < m2))
          for (var x2 = this.result, g2 = u2; g2 < d2; g2++)
            for (var b2 = v2; b2 < y2; b2++) {
              var B2 = x2.length;
              if (e2.getConvexTrianglePillar(g2, b2, false), a.pointToWorldFrame(i2, s2, e2.pillarOffset, tz), o2.distanceTo(tz) < e2.pillarConvex.boundingSphereRadius + t3.boundingSphereRadius && this.sphereConvex(t3, e2.pillarConvex, o2, tz, n2, s2, r2, l2), e2.getConvexTrianglePillar(g2, b2, true), a.pointToWorldFrame(i2, s2, e2.pillarOffset, tz), o2.distanceTo(tz) < e2.pillarConvex.boundingSphereRadius + t3.boundingSphereRadius && this.sphereConvex(t3, e2.pillarConvex, o2, tz, n2, s2, r2, l2), x2.length - B2 > 2)
                return;
            }
      }
    };
  }, { "../collision/AABB": 3, "../collision/Ray": 9, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43, "../solver/Solver": 47, "../utils/Vec3Pool": 54 }], 56: [function(t2, e, o) {
    e.exports = w;
    var i = t2("../shapes/Shape"), n = t2("../math/Vec3"), s = t2("../math/Quaternion"), r = t2("../solver/GSSolver");
    t2("../utils/Vec3Pool"), t2("../equations/ContactEquation"), t2("../equations/FrictionEquation");
    var a = t2("./Narrowphase"), l = t2("../utils/EventTarget"), h = t2("../collision/ArrayCollisionMatrix"), p = t2("../material/Material"), c = t2("../material/ContactMaterial"), u = t2("../objects/Body"), d = t2("../utils/TupleDictionary"), v = t2("../collision/RaycastResult"), y = t2("../collision/AABB"), f = t2("../collision/Ray"), m = t2("../collision/NaiveBroadphase");
    function w() {
      l.apply(this), this.dt = -1, this.allowSleep = false, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = 0, this.quatNormalizeFast = false, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new n(), this.broadphase = new m(), this.bodies = [], this.solver = new r(), this.constraints = [], this.narrowphase = new a(this), this.collisionMatrix = new h(), this.collisionMatrixPrevious = new h(), this.materials = [], this.contactmaterials = [], this.contactMaterialTable = new d(), this.defaultMaterial = new p("default"), this.defaultContactMaterial = new c(this.defaultMaterial, this.defaultMaterial, { friction: 0.3, restitution: 0 }), this.doProfiling = false, this.profile = { solve: 0, makeContactConstraints: 0, broadphase: 0, integrate: 0, narrowphase: 0 }, this.subsystems = [], this.addBodyEvent = { type: "addBody", body: null }, this.removeBodyEvent = { type: "removeBody", body: null };
    }
    w.prototype = new l(), new y();
    var x = new f();
    if (w.prototype.getContactMaterial = function(t3, e2) {
      return this.contactMaterialTable.get(t3.id, e2.id);
    }, w.prototype.numObjects = function() {
      return this.bodies.length;
    }, w.prototype.collisionMatrixTick = function() {
      var t3 = this.collisionMatrixPrevious;
      this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = t3, this.collisionMatrix.reset();
    }, w.prototype.add = w.prototype.addBody = function(t3) {
      -1 === this.bodies.indexOf(t3) && (t3.index = this.bodies.length, this.bodies.push(t3), t3.world = this, t3.initPosition.copy(t3.position), t3.initVelocity.copy(t3.velocity), t3.timeLastSleepy = this.time, t3 instanceof u && (t3.initAngularVelocity.copy(t3.angularVelocity), t3.initQuaternion.copy(t3.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = t3, this.dispatchEvent(this.addBodyEvent));
    }, w.prototype.addConstraint = function(t3) {
      this.constraints.push(t3);
    }, w.prototype.removeConstraint = function(t3) {
      var e2 = this.constraints.indexOf(t3);
      -1 !== e2 && this.constraints.splice(e2, 1);
    }, w.prototype.rayTest = function(t3, e2, o2) {
      o2 instanceof v ? this.raycastClosest(t3, e2, { skipBackfaces: true }, o2) : this.raycastAll(t3, e2, { skipBackfaces: true }, o2);
    }, w.prototype.raycastAll = function(t3, e2, o2, i2) {
      return o2.mode = f.ALL, o2.from = t3, o2.to = e2, o2.callback = i2, x.intersectWorld(this, o2);
    }, w.prototype.raycastAny = function(t3, e2, o2, i2) {
      return o2.mode = f.ANY, o2.from = t3, o2.to = e2, o2.result = i2, x.intersectWorld(this, o2);
    }, w.prototype.raycastClosest = function(t3, e2, o2, i2) {
      return o2.mode = f.CLOSEST, o2.from = t3, o2.to = e2, o2.result = i2, x.intersectWorld(this, o2);
    }, w.prototype.remove = function(t3) {
      t3.world = null;
      var e2 = this.bodies.length - 1, o2 = this.bodies, i2 = o2.indexOf(t3);
      if (-1 !== i2) {
        o2.splice(i2, 1);
        for (var n2 = 0; n2 !== o2.length; n2++)
          o2[n2].index = n2;
        this.collisionMatrix.setNumObjects(e2), this.removeBodyEvent.body = t3, this.dispatchEvent(this.removeBodyEvent);
      }
    }, w.prototype.removeBody = w.prototype.remove, w.prototype.addMaterial = function(t3) {
      this.materials.push(t3);
    }, w.prototype.addContactMaterial = function(t3) {
      this.contactmaterials.push(t3), this.contactMaterialTable.set(t3.materials[0].id, t3.materials[1].id, t3);
    }, "undefined" == typeof performance && (performance = {}), !performance.now) {
      var g = Date.now();
      performance.timing && performance.timing.navigationStart && (g = performance.timing.navigationStart), performance.now = function() {
        return Date.now() - g;
      };
    }
    var b = new n();
    w.prototype.step = function(t3, e2, o2) {
      if (o2 = o2 || 10, 0 === (e2 = e2 || 0))
        this.internalStep(t3), this.time += t3;
      else {
        var i2 = Math.floor((this.time + e2) / t3) - Math.floor(this.time / t3);
        i2 = Math.min(i2, o2);
        for (var n2 = performance.now(), s2 = 0; s2 !== i2 && (this.internalStep(t3), !(performance.now() - n2 > 1e3 * t3)); s2++)
          ;
        this.time += e2;
        for (var r2 = this.time % t3 / t3, a2 = this.bodies, l2 = 0; l2 !== a2.length; l2++) {
          var h2 = a2[l2];
          h2.type !== u.STATIC && h2.sleepState !== u.SLEEPING ? (h2.position.vsub(h2.previousPosition, b), b.scale(r2, b), h2.position.vadd(b, h2.interpolatedPosition)) : (h2.interpolatedPosition.copy(h2.position), h2.interpolatedQuaternion.copy(h2.quaternion));
        }
      }
    };
    var B = { type: "postStep" }, E = { type: "preStep" }, A = { type: "collide", body: null, contact: null }, S = [], C = [], z = [], q = [], R = (new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n(), new s(), new s()), M = new s(), P = new n();
    w.prototype.internalStep = function(t3) {
      this.dt = t3;
      var e2, o2 = this.contacts, n2 = this.numObjects(), s2 = this.bodies, r2 = this.solver, a2 = this.gravity, l2 = this.doProfiling, h2 = this.profile, p2 = u.DYNAMIC, c2 = this.constraints, d2 = (a2.norm(), a2.x), v2 = a2.y, y2 = a2.z, f2 = 0;
      for (l2 && (e2 = performance.now()), f2 = 0; f2 !== n2; f2++) {
        var m2 = s2[f2];
        if (m2.type & p2) {
          var w2 = m2.force, x2 = m2.mass;
          w2.x += x2 * d2, w2.y += x2 * v2, w2.z += x2 * y2;
        }
      }
      for (var f2 = 0, g2 = this.subsystems.length; f2 !== g2; f2++)
        this.subsystems[f2].update();
      l2 && (e2 = performance.now()), z.length = 0, q.length = 0, this.broadphase.collisionPairs(this, z, q), l2 && (h2.broadphase = performance.now() - e2);
      var b2 = c2.length;
      for (f2 = 0; f2 !== b2; f2++) {
        var F = c2[f2];
        if (!F.collideConnected)
          for (var V = z.length - 1; V >= 0; V -= 1)
            (F.bodyA === z[V] && F.bodyB === q[V] || F.bodyB === z[V] && F.bodyA === q[V]) && (z.splice(V, 1), q.splice(V, 1));
      }
      this.collisionMatrixTick(), l2 && (e2 = performance.now());
      var T = o2.length;
      for (f2 = 0; f2 !== T; f2++)
        S.push(o2[f2]);
      o2.length = 0;
      var I = this.frictionEquations.length;
      for (f2 = 0; f2 !== I; f2++)
        C.push(this.frictionEquations[f2]);
      this.frictionEquations.length = 0, this.narrowphase.getContacts(z, q, this, o2, S, this.frictionEquations, C), l2 && (h2.narrowphase = performance.now() - e2), l2 && (e2 = performance.now());
      for (var f2 = 0; f2 < this.frictionEquations.length; f2++)
        r2.addEquation(this.frictionEquations[f2]);
      for (var N = o2.length, W = 0; W !== N; W++) {
        var F = o2[W], m2 = F.bi, L = F.bj;
        F.si, F.sj, (m2.material && L.material && this.getContactMaterial(m2.material, L.material) || this.defaultContactMaterial).friction, m2.material && L.material && (m2.material.friction >= 0 && L.material.friction >= 0 && (m2.material.friction, L.material.friction), m2.material.restitution >= 0 && L.material.restitution >= 0 && (F.restitution = m2.material.restitution * L.material.restitution)), r2.addEquation(F), m2.allowSleep && m2.type === u.DYNAMIC && m2.sleepState === u.SLEEPING && L.sleepState === u.AWAKE && L.type !== u.STATIC && L.velocity.norm2() + L.angularVelocity.norm2() >= 2 * Math.pow(L.sleepSpeedLimit, 2) && (m2._wakeUpAfterNarrowphase = true), L.allowSleep && L.type === u.DYNAMIC && L.sleepState === u.SLEEPING && m2.sleepState === u.AWAKE && m2.type !== u.STATIC && m2.velocity.norm2() + m2.angularVelocity.norm2() >= 2 * Math.pow(m2.sleepSpeedLimit, 2) && (L._wakeUpAfterNarrowphase = true), this.collisionMatrix.set(m2, L, true), this.collisionMatrixPrevious.get(m2, L) || (A.body = L, A.contact = F, m2.dispatchEvent(A), A.body = m2, L.dispatchEvent(A));
      }
      for (l2 && (h2.makeContactConstraints = performance.now() - e2, e2 = performance.now()), f2 = 0; f2 !== n2; f2++) {
        var m2 = s2[f2];
        m2._wakeUpAfterNarrowphase && (m2.wakeUp(), m2._wakeUpAfterNarrowphase = false);
      }
      var b2 = c2.length;
      for (f2 = 0; f2 !== b2; f2++) {
        var F = c2[f2];
        F.update();
        for (var V = 0, j = F.equations.length; V !== j; V++) {
          var O = F.equations[V];
          r2.addEquation(O);
        }
      }
      r2.solve(t3, this), l2 && (h2.solve = performance.now() - e2), r2.removeAllEquations();
      var k = Math.pow;
      for (f2 = 0; f2 !== n2; f2++) {
        var m2 = s2[f2];
        if (m2.type & p2) {
          var _ = k(1 - m2.linearDamping, t3), U = m2.velocity;
          U.mult(_, U);
          var H = m2.angularVelocity;
          if (H) {
            var D = k(1 - m2.angularDamping, t3);
            H.mult(D, H);
          }
        }
      }
      for (this.dispatchEvent(E), f2 = 0; f2 !== n2; f2++) {
        var m2 = s2[f2];
        m2.preStep && m2.preStep.call(m2);
      }
      l2 && (e2 = performance.now());
      var X = this.stepnumber, G = u.DYNAMIC | u.KINEMATIC, Y = X % (this.quatNormalizeSkip + 1) == 0, Q = this.quatNormalizeFast, Z = 0.5 * t3;
      for (i.types.PLANE, i.types.CONVEXPOLYHEDRON, f2 = 0; f2 !== n2; f2++) {
        var K = s2[f2], J = K.force, $ = K.torque;
        if (K.type & G && K.sleepState !== u.SLEEPING) {
          var tt = K.velocity, te = K.angularVelocity, to = K.position, ti = K.quaternion, tn = K.invMass, ts = K.invInertiaWorld;
          tt.x += J.x * tn * t3, tt.y += J.y * tn * t3, tt.z += J.z * tn * t3, K.angularVelocity && (ts.vmult($, P), P.mult(t3, P), P.vadd(te, te)), to.x += tt.x * t3, to.y += tt.y * t3, to.z += tt.z * t3, K.angularVelocity && (R.set(te.x, te.y, te.z, 0), R.mult(ti, M), ti.x += Z * M.x, ti.y += Z * M.y, ti.z += Z * M.z, ti.w += Z * M.w, Y && (Q ? ti.normalizeFast() : ti.normalize())), K.aabb && (K.aabbNeedsUpdate = true), K.updateInertiaWorld && K.updateInertiaWorld();
        }
      }
      for (this.clearForces(), this.broadphase.dirty = true, l2 && (h2.integrate = performance.now() - e2), this.time += t3, this.stepnumber += 1, this.dispatchEvent(B), f2 = 0; f2 !== n2; f2++) {
        var m2 = s2[f2], tr = m2.postStep;
        tr && tr.call(m2);
      }
      if (this.allowSleep)
        for (f2 = 0; f2 !== n2; f2++)
          s2[f2].sleepTick(this.time);
    }, w.prototype.clearForces = function() {
      for (var t3 = this.bodies, e2 = t3.length, o2 = 0; o2 !== e2; o2++) {
        var i2 = t3[o2];
        i2.force, i2.torque, i2.force.set(0, 0, 0), i2.torque.set(0, 0, 0);
      }
    };
  }, { "../collision/AABB": 3, "../collision/ArrayCollisionMatrix": 4, "../collision/NaiveBroadphase": 7, "../collision/Ray": 9, "../collision/RaycastResult": 10, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../material/ContactMaterial": 24, "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Shape": 43, "../solver/GSSolver": 46, "../utils/EventTarget": 49, "../utils/TupleDictionary": 52, "../utils/Vec3Pool": 54, "./Narrowphase": 55 }] }, {}, [2])(2);
} }]);
//# sourceMappingURL=2146d3b8-3834dbc6f4e79c22.js.map

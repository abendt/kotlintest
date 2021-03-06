package com.sksamuel.kotest

import io.kotest.core.spec.Order
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

// this is used to generate some data for the xml report
@Order(0)
class DummySpecFunTest : FunSpec() {
   init {
      context("context") {
         test("a") {
            1 + 1 shouldBe 2
         }
         test("b") {
            1 + 1 shouldBe 2
         }
      }
   }
}

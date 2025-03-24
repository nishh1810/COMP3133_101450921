import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from '@angular/core';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    // Create a mock ElementRef
    const mockElementRef = new ElementRef(document.createElement('input'));
    
    // Pass the mock ElementRef to the directive
    const directive = new InputFormatDirective(mockElementRef);
    
    expect(directive).toBeTruthy();
  });
});
